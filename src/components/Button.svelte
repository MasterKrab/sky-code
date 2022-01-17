<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let label: string;
  export let icon: string = "";
  export let disabled: boolean = false;
  export let text = "";

  const dispath = createEventDispatcher();

  const handleClick = () => dispath("click");
</script>

<button
  on:click={handleClick}
  class="left-bar-button"
  data-label={label}
  {disabled}
>
  {#if text}
    {text}
  {:else}
    <img src={icon} alt={label} />
  {/if}
</button>
