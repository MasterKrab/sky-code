<script lang="ts">
  export let label: string;
  export let name: string;
  export let checked: boolean;
</script>

<label class="label">
  {label}
  <input class="input checkbox" type="checkbox" bind:checked {name} />
</label>

<style>
  .label {
    display: flex;
    align-items: center;
    font-size: min(1rem, 5vw);
  }

  .input {
    margin-left: 1rem;
    font-size: 0.875rem;
  }
</style>
