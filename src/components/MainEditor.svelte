<script lang="ts">
  import Styles from "components/Styles.svelte";

  let element: HTMLElement;
  let windowHeight: number;
  let isFullScreen = !!document.fullscreenElement;

  const getTop = () => element.getBoundingClientRect().top;

  const handleFullScreenChange = () =>
    (isFullScreen = !!document.fullscreenElement);
</script>

<svelte:window bind:innerHeight={windowHeight} />

<svelte:body on:fullscreenchange={handleFullScreenChange} />

{#if !isFullScreen && windowHeight}
  <Styles
    css={`
      .main{
         height: ${windowHeight - getTop()}px;
      }
   `}
  />
{/if}

<main bind:this={element} class="main">
  <slot />
</main>

<style lang="scss">
  .main {
    display: grid;
    grid-template-columns: 100%;
    gap: 0.25rem;
    background-color: var(--secondary-color);

    @media screen and (min-width: 1000px) {
      grid-template-columns: 50px 1fr;
    }
  }
</style>
