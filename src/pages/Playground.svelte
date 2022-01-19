<script lang="ts">
  import apiCall from "utils/apiCall";
  import { getError } from "utils/error";
  import HeadTitle from "components/HeadTitle.svelte";
  import Styles from "components/Styles.svelte";
  import FullscreenButton from "components/FullScreenButton.svelte";
  import DownloadLink from "components/DownloadLink.svelte";
  import Editor from "components/Editor.svelte";
  import Output from "components/Output.svelte";
  import PlaygroundSettings from "components/PlaygroundSettings.svelte";
  import Spinner from "components/Spinner.svelte";
  import Button from "components/Button.svelte";
  import getIsMobile from "utils/getIsMobile";
  import chevronRightIcon from "assets/icons/chevron-right.svg";
  import formatIcon from "assets/icons/format.svg";
  import type monaco from "monaco-editor";

  let code = "";
  let output: any[] = [];
  let outputError: string;

  let isLoading = false;

  let typescript = true;
  let direction: "horizontal" | "vertical" = getIsMobile()
    ? "vertical"
    : "horizontal";

  let fontSize = 20;
  let minFontSize = 10;
  let maxFontSize = 100;
  let lineWrapping = true;
  let showLineNumbers = false;
  let tabSize = 4;
  let semi = true;
  let singleQuote = true;

  const runCode = () => {
    isLoading = true;

    apiCall("run", { code, typescript })
      .then((result) => {
        outputError = null;
        output = result as any[];
      })
      .catch(async (error) => (outputError = getError(error)))
      .finally(() => {
        isLoading = false;
      });
  };

  $: if (code) runCode();

  let editor: monaco.editor.IStandaloneCodeEditor;

  const handleFormatCode = () =>
    editor.getAction("editor.action.formatDocument").run();

  let container: HTMLElement;
  let editorSize: number;
  let outputSize: number;
  let resizing = false;

  const handleMouseDown = () => (resizing = true);

  const handleMouseUp = () => (resizing = false);

  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!resizing) return;

    const key = direction === "horizontal" ? "pageX" : "pageY";
    const dimension =
      direction === "horizontal" ? "offsetWidth" : "offsetHeight";

    const touches = (e as TouchEvent)?.touches;

    const cordinate =
      (e as MouseEvent)[key] ||
      (touches && touches.length ? touches[0][key] : 0);

    const difference =
      document.documentElement[dimension] - container[dimension];

    const normalizedCordinate = cordinate - difference;

    if (
      normalizedCordinate <= container[dimension] * 0.05 ||
      normalizedCordinate >= container[dimension] * 0.95
    )
      return;

    const size = container[dimension] - normalizedCordinate;

    outputSize = size;
    editorSize = container[dimension] - size;
  };

  const setSize = (size: number, fallback: string) =>
    size ? `${size}px` : fallback;

  const calculateDimensions = () => {
    const dimension =
      direction === "horizontal" ? "offsetWidth" : "offsetHeight";

    editorSize = container[dimension] - outputSize;
  };

  const handleResize = () => {
    if (!container) return;

    if (getIsMobile()) direction = "vertical";

    calculateDimensions();
  };

  $: container && direction && calculateDimensions();
</script>

<HeadTitle text="Playground" />

<Styles
  css={`
  .result{
    font-size: ${fontSize}px;
  }  
`}
/>

<svelte:window on:resize={handleResize} />

<svelte:body
  on:mousemove={handleMouseMove}
  on:mouseup={handleMouseUp}
  on:touchmove={handleMouseMove}
  on:touchend={handleMouseUp} />

{#if isLoading}
  <Spinner />
{/if}

<div class="left-bar">
  <PlaygroundSettings
    bind:direction
    bind:fontSize
    bind:minFontSize
    bind:maxFontSize
    bind:lineWrapping
    bind:showLineNumbers
    bind:tabSize
    bind:semi
    bind:singleQuote
  />
  <FullscreenButton element={container?.parentElement} />
  <Button label="Run code" on:click={runCode} icon={chevronRightIcon} />
  <DownloadLink bind:code />
  <Button label="Format code" on:click={handleFormatCode} icon={formatIcon} />
</div>

<div
  bind:this={container}
  class="editor"
  class:editor--vertical={direction !== "horizontal"}
  style="--grid: {setSize(editorSize - 2.5, '2fr')} 5px {setSize(
    outputSize - 2.5,
    '1fr'
  )};"
>
  <Editor
    ariaLabel="Playground Editor"
    bind:editor
    bind:fontSize
    bind:minFontSize
    bind:maxFontSize
    bind:lineWrapping
    bind:showLineNumbers
    bind:tabSize
    bind:semi
    bind:singleQuote
    bind:code
  />
  <div
    class="divider"
    class:divider--vertical={direction !== "horizontal"}
    on:mousedown={handleMouseDown}
    on:touchstart={handleMouseDown}
  />
  <ul class="result scrollbar reset-list">
    {#if outputError}
      <Output error={outputError} />
    {:else}
      {#each output as { output, console }}
        {#if direction !== "horizontal" && (output !== undefined || console?.length)}
          <Output {output} consoleOutput={console} />
        {/if}

        {#if direction === "horizontal"}
          <Output {output} consoleOutput={console} />
        {/if}
      {/each}
    {/if}
  </ul>
</div>

<style lang="scss">
  .editor {
    display: grid;
    grid-template-columns: var(--grid);
    overflow: hidden;

    &--vertical {
      grid-template-columns: 1fr;
      grid-template-rows: var(--grid);
    }
  }

  .divider {
    background-color: var(--secondary-color);
    cursor: col-resize;

    &--vertical {
      cursor: row-resize;
    }
  }

  .result {
    background-color: var(--primary-color);
    font-family: monospace;
    padding-left: 0.5rem;
    overflow-y: auto;
  }
</style>
