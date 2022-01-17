<script lang="ts">
  import { slide } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import Editor from "./Editor.svelte";
  import Result from "./Result.svelte";

  export let title: string;
  export let code: string;
  export let index: number;
  export let output: any = undefined;
  export let tests: number = null;
  export let fastest: number;
  export let slowest: number;

  let fontSize = 14;
  let minFontSize = 10;
  let maxFontSize = 60;
  let lineWrapping = false;

  const dispatch = createEventDispatcher();

  const handleRun = ({ detail }) => dispatch("run", { ...detail });
  const handleRemove = ({ detail }) => dispatch("remove", { ...detail });
</script>

<div class="editor-container" transition:slide|local={{ duration: 200 }}>
  <Editor
    ariaLabel="Editor for test {title}"
    bind:code
    bind:fontSize
    bind:minFontSize
    bind:maxFontSize
    bind:lineWrapping
  />

  <Result
    on:run={handleRun}
    on:remove={handleRemove}
    bind:title
    bind:fontSize
    bind:minFontSize
    bind:maxFontSize
    bind:lineWrapping
    {index}
    {output}
    {tests}
    {fastest}
    {slowest}
  />
</div>

<style lang="scss">
  .editor-container {
    display: grid;
    grid-template-rows: 200px 250px;
    gap: 0.25rem;

    @media screen and (min-width: 1000px) {
      grid-template-columns: 3fr 1fr;
      grid-template-rows: 300px;
    }
  }
</style>
