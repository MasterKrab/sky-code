<script lang="ts">
  import Styles from "components/Styles.svelte";
</script>

<Styles
  css={`
    body{
       background-color: var(--primary-color);
    }
 `}
/>

<main class="main">
  <slot />
</main>

<style lang="scss">
  .main {
    padding: 0.5rem;
  }
</style>
