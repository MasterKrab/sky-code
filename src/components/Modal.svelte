<script lang="ts">
  import { onDestroy } from "svelte";
  import { fade } from "svelte/transition";
  import focusableElements from "config/focusableElements";

  export let openModal: boolean;

  let parentNode: HTMLElement;
  let firstFocus: HTMLElement;
  let lastFocus: HTMLElement;

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      const focus = document.activeElement;

      if (focus === firstFocus && e.shiftKey) {
        e.preventDefault();
        lastFocus.focus();
      } else if (focus === lastFocus && !e.shiftKey) {
        e.preventDefault();
        firstFocus.focus();
      }
    } else if (e.key === "Escape") {
      openModal = false;
    }
  };

  const handleClick = (e: Event) => {
    const target = e.target as HTMLElement;

    if (target === parentNode) openModal = false;
  };

  const onMount = () => {
    const focusableElementsInNode =
      parentNode.querySelectorAll(focusableElements);

    firstFocus = focusableElementsInNode[0] as HTMLElement;

    lastFocus = focusableElementsInNode[
      focusableElements.length - 1
    ] as HTMLElement;

    firstFocus?.focus();
  };

  $: parentNode && onMount();
</script>

{#if openModal}
  <div
    class="modal"
    role="dialog"
    aria-modal="true"
    bind:this={parentNode}
    transition:fade={{ duration: 200 }}
    on:keydown={handleKeyDown}
    on:click={handleClick}
  >
    <slot />
  </div>
{/if}

<style>
  .modal {
    display: grid;
    place-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 99999;
  }
</style>
