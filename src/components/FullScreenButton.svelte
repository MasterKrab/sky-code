<script lang="ts">
  import Button from "components/Button.svelte";
  import fullscreen from "assets/icons/fullscreen.svg";

  export let element: HTMLElement;

  const handleClick = () => {
    if (document.fullscreenElement) return document.exitFullscreen();

    element.requestFullscreen();
  };
</script>

{#if document.fullscreenEnabled}
  <Button on:click={handleClick} label="Fullscreen" icon={fullscreen} />
{/if}
