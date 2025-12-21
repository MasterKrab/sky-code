<script lang="ts">
  export let output: string;
  export let rawValue: any;
  export let hasResult: boolean;
  export let consoleOutput: any[] = [];
  export let error: string = undefined;

  const colorize = (text: string) => {
    if (!text) return "";
    return (
      text
        // Strings
        .replace(/("[^"]*")/g, '<span class="t-str">$1</span>')
        // Numbers and BigInts
        .replace(/\b(-?\d+(?:\.\d+)?n?)\b/g, '<span class="t-num">$1</span>')
        // Booleans, null, undefined (Purple/Light Blue)
        .replace(
          /\b(true|false|null|undefined)\b/g,
          '<span class="t-kw">$1</span>'
        )
        // Metadata like (3) for array lengths
        .replace(/(\(\d+\))/g, '<span class="t-meta">$1</span>')
        // Brackets and Braces (Soft Yellow to highlight structure)
        .replace(/([\[\]\{\}])/g, '<span class="t-bracket">$1</span>')
        // Colons and Commas (Off-white)
        .replace(/([:,])/g, '<span class="t-punct">$1</span>')
    );
  };

  $: htmlOutput = hasResult ? colorize(output) : "";
</script>

{#if error}
  <li class="line-output error">{error}</li>
{:else}
  <li class="line-output">
    {#each consoleOutput as log}
      <div class="console-log">>: {log}</div>
    {/each}

    {#if hasResult}
      <pre class="result-value">{@html htmlOutput}</pre>
    {/if}
  </li>
{/if}

<style>
  .line-output {
    padding: 4px 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: inherit;
  }

  .error {
    color: #fca5a5;
    background: rgba(239, 68, 68, 0.1);
  }

  .console-log {
    color: #94a3b8;
    font-size: 0.85em;
    font-family: monospace;
    font-style: italic;
    margin-bottom: 2px;
  }

  .result-value {
    margin: 0;
    font-family: "Fira Code", "Cascadia Code", monospace;
    color: #e2e8f0;
    white-space: pre-wrap;
    word-break: break-all;
    line-height: 1.5;
  }

  :global(.t-str) {
    color: #86efac;
  }

  :global(.t-num) {
    color: #fdba74;
  }

  :global(.t-kw) {
    color: #d8b4fe;
    font-weight: bold;
  }

  :global(.t-bracket) {
    color: #fde047;
  }

  :global(.t-meta) {
    color: #94a3b8;
    font-size: 0.9em;
  }

  :global(.t-punct) {
    color: #cbd5e1;
  }
</style>
