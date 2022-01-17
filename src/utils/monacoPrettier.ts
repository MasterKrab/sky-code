import type monaco from "monaco-editor";

export const typescriptPrettier = (prettierOptions: any = {}) => ({
  async provideDocumentFormattingEdits(model: monaco.editor.ITextModel) {
    const prettier = await import("prettier/standalone");
    const typescript = await import("prettier/parser-typescript");
    const text = prettier.format(model.getValue(), {
      parser: "typescript",
      plugins: [typescript],
      ...prettierOptions,
    });

    return [
      {
        range: model.getFullModelRange(),
        text,
      },
    ];
  },
});
