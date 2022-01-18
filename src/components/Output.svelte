<script lang="ts">
  import Formatter from "./Formatter.svelte";

  export let output: any = undefined;
  export let consoleOutput: any[] = [];
  export let error: string | null = null;
</script>

<li
  class="output"
  class:output--error={error}
  aria-hidden={output === undefined}
>
  {#if error}
    {#each error.split("\n") as error, index}
      {#if index > 0}
        <br />
      {/if}

      {error}
    {/each}
  {:else if consoleOutput && consoleOutput.length}
    <details class="output__console">
      <summary>
        {#if output === undefined}
          console
        {:else}
          <Formatter data={output} />
        {/if}
      </summary>
      <ul class="output__logs reset-list">
        {#each consoleOutput as { type, output }}
          <li class="output__{type}"><Formatter data={output} /></li>
        {/each}
      </ul>
    </details>
  {:else if output === undefined}
    <br />
  {:else}
    <Formatter data={output} />
  {/if}
</li>

<style lang="scss">
  .output {
    margin-top: 0.015rem;
    line-height: 1.3em;

    &--error {
      padding: 0.5rem;
      color: var(--danger-color);
    }

    &__logs {
      margin-left: 1rem;
    }

    &__console[open] {
      width: 100%;
    }
  }

  :global(.json-markup) {
    display: inline-flex;
    flex-wrap: wrap;
  }
</style>
