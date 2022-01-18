<script lang="ts">
  import { onMount } from "svelte";
  import FloatingFocus from "@q42/floating-focus-a11y/dist/unstyled";
  import "@q42/floating-focus-a11y/dist/unstyled/index.css";
  import "scss/floating-focus.scss";

  onMount(() => {
    new FloatingFocus();
  });
</script>
