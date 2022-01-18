<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import cross from "assets/icons/cross.svg";

  export let label = "Close Modal";

  const dispatch = createEventDispatcher();

  const handleClick = () => dispatch("click");
</script>

<button on:click={handleClick} class="close-modal">
  <img src={cross} alt={label} />
</button>

<style lang="scss">
  .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
  }
</style>
