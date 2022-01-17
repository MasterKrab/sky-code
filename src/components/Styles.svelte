<script lang="ts">
  export let css = "";

  let styleElement: Node;

  $: if (styleElement) styleElement.textContent = css;
</script>

<svelte:head>
  {#if css.trim()}
    <style bind:this={styleElement}></style>
  {/if}
</svelte:head>
