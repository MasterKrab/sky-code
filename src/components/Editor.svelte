<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import * as monaco from "monaco-editor";
  import monacoOptions from "utils/monacoOptions";
  import editorWorker from "monaco-editor/esm/vs/editor/editor.worker.js?worker";
  import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
  import theme from "themes/material-palenight";
  import { typescriptPrettier } from "utils/monacoPrettier";

  export let editor: monaco.editor.IStandaloneCodeEditor = null;
  let element: HTMLElement;

  export let ariaLabel = "Editor";
  export let code = "";

  export let lineWrapping = true;
  export let fontSize = 14;
  export let minFontSize = 10;
  export let maxFontSize = 100;
  export let showLineNumbers = false;
  export let tabSize = 4;
  export let semi = true;
  export let singleQuote = true;

  let ctrlKey = false;

  const getOnOff = (on: boolean): "on" | "off" => (on ? "on" : "off");

  const handleKeyDown = (e: KeyboardEvent) => {
    const { key } = e;

    ctrlKey = e.ctrlKey;

    if (!ctrlKey) return;

    const isMinus = key === "-";
    const isPlus = key === "+";

    if (isMinus || isPlus) e.preventDefault();

    if (isMinus && fontSize > minFontSize) {
      fontSize -= 1;
    } else if (isPlus && fontSize < maxFontSize) {
      fontSize += 1;
    }
  };

  //@ts-ignore
  window.MonacoEnvironment = {
    getWorker(_: any, label: string) {
      if (label === "typescript" || label === "javascript")
        return new tsWorker();

      return new editorWorker();
    },
  };

  monaco.languages.typescript.typescriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: false,
    noSyntaxValidation: false,
  });

  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    allowNonTsExtensions: true,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    module: monaco.languages.typescript.ModuleKind.CommonJS,
    allowJs: true,
    typeRoots: ["node_modules/@types"],
  });

  onMount(() => {
    monaco.editor.defineTheme(
      "palenight",
      theme as monaco.editor.IStandaloneThemeData
    );

    editor = monaco.editor.create(element, {
      ...monacoOptions,
      fontSize,
      ariaLabel,
      tabSize,

      lineNumbers: getOnOff(showLineNumbers),
      wordWrap: getOnOff(lineWrapping),
    });

    editor.getModel().onDidChangeContent(() => {
      code = editor.getValue();
    });
  });

  $: if (editor) {
    editor.updateOptions({
      fontSize,
      lineNumbers: getOnOff(showLineNumbers),
      wordWrap: getOnOff(lineWrapping),
    });
  }

  $: monaco.languages.registerDocumentFormattingEditProvider(
    "typescript",
    typescriptPrettier({ semi, singleQuote, tabWidth: tabSize })
  );

  const handleWheel = (e: Event) => {
    if (!ctrlKey) return;

    e.preventDefault();

    const isUp = (e as WheelEvent).deltaY > 0;

    if (isUp && fontSize > minFontSize) {
      fontSize -= 1;
    } else if (!isUp && fontSize < maxFontSize) {
      fontSize += 1;
    }
  };

  onDestroy(() => editor.dispose());
</script>

<div
  class="container"
  bind:this={element}
  on:keydown={handleKeyDown}
  on:wheel={handleWheel}
/>

<style>
  .container {
    background-color: var(--primary-color);
    overflow: auto;
  }
</style>
