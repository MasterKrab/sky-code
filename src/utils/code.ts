import * as Babel from "@babel/standalone/babel.min.js";

const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;

const formatValue = (value: any, depth = 0, seen = new WeakSet()): string => {
  if (value === undefined) return "";
  if (value === null) return "null";
  if (typeof value === "string") return `"${value}"`;
  if (typeof value === "number")
    return Object.is(value, -0) ? "-0" : String(value);
  if (typeof value === "boolean") return String(value);
  if (typeof value === "bigint") return `${value}n`;
  if (typeof value === "symbol") return value.toString();
  if (typeof value === "function")
    return `[Function: ${value.name || "(anonymous)"}]`;

  if (value && value.__isPromiseState) {
    if (value.status === "pending") return "(Promise) <Pending...>";
    if (value.status === "rejected")
      return `(Promise) <Rejected: ${value.value}>`;
    return formatValue(value.value);
  }

  if (typeof value === "object") {
    if (seen.has(value)) return "[Circular]";
    seen.add(value);
    if (depth > 2) return Array.isArray(value) ? "[Array]" : "[Object]";

    try {
      if (Array.isArray(value)) {
        const items = value
          .slice(0, 10)
          .map((v) => formatValue(v, depth + 1, seen));
        return `(${value.length}) [${items.join(", ")}]`;
      }
      if (value instanceof Map) return `Map(${value.size})`;
      if (value instanceof Set) return `Set(${value.size})`;
      if (value instanceof Date) return `Date(${value.toISOString()})`;

      const entries = Object.entries(value)
        .slice(0, 5)
        .map(([k, v]) => `${k}: ${formatValue(v, depth + 1, seen)}`);
      return `{ ${entries.join(", ")} }`;
    } catch (e) {
      return "[Object]";
    }
  }
  return String(value);
};

const registerBabelPlugin = () => {
  if (Babel.availablePlugins && Babel.availablePlugins["spy-plugin"]) return;

  Babel.registerPlugin("spy-plugin", ({ types: t }: any) => ({
    visitor: {
      ExpressionStatement(path: any) {
        const line = path.node.loc?.start.line;
        if (line) {
          path.replaceWith(
            t.expressionStatement(
              t.callExpression(t.identifier("__spy"), [
                t.numericLiteral(line),
                path.node.expression,
              ])
            )
          );
          path.skip();
        }
      },
      VariableDeclaration(path: any) {
        const line = path.node.loc?.start.line;
        if (line) {
          path.node.declarations.forEach((decl: any) => {
            if (decl.init) {
              decl.init = t.callExpression(t.identifier("__spy"), [
                t.numericLiteral(line),
                decl.init,
              ]);
            }
          });
        }
      },
    },
  }));
};

export const evaluateCode = (
  code: string,
  onUpdate?: (results: any[]) => void
) => {
  let executionResults: Record<number, any> = {};

  const generateOutput = () => {
    const codeLines = code.split("\n");
    return codeLines.map((_, index) => {
      const lineNumber = index + 1;
      const hasResult = Object.prototype.hasOwnProperty.call(
        executionResults,
        lineNumber
      );
      let value = hasResult ? executionResults[lineNumber] : undefined;

      let rawForTree = value;

      if (value && value.__isPromiseState) {
        if (value.status === "resolved") {
          value = value.value;
          rawForTree = value;
        } else {
          rawForTree = { PromiseStatus: value.status };
        }
      }

      return {
        output: hasResult ? formatValue(value) : undefined,
        rawValue: rawForTree,
        hasResult: hasResult,
        console: [],
      };
    });
  };

  // @ts-ignore
  if (typeof window !== "undefined") {
    // @ts-ignore
    window.__spy = (line: number, value: any) => {
      if (value instanceof Promise) {
        executionResults[line] = { __isPromiseState: true, status: "pending" };

        value
          .then((res) => {
            executionResults[line] = {
              __isPromiseState: true,
              status: "resolved",
              value: res,
            };
            if (onUpdate) onUpdate(generateOutput());
          })
          .catch((err) => {
            executionResults[line] = {
              __isPromiseState: true,
              status: "rejected",
              value: err,
            };
            if (onUpdate) onUpdate(generateOutput());
          });
      } else {
        executionResults[line] = value;
      }

      if (onUpdate) onUpdate(generateOutput());

      return value;
    };
  }

  registerBabelPlugin();

  try {
    const transpiled = Babel.transform(code, {
      filename: "file.ts",
      presets: ["typescript"],
      plugins: ["spy-plugin"],
      parserOpts: { allowAwaitOutsideFunction: true },
    }).code;

    new AsyncFunction(transpiled)().catch((err: any) => {
      console.error("Async Error:", err);
    });
  } catch (error: any) {
    throw error;
  }

  return generateOutput();
};
