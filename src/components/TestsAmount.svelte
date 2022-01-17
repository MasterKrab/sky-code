<script lang="ts">
  export let value = 50;
  export let min: number;
  export let max: number;

  const increase = () => (value += 1);
  const decrease = () => (value -= 1);

  $: if (value > max) value = max;
  $: if (value < min) value = min;
</script>

<label class="label">
  Tests
  <input class="input" bind:value type="number" {min} {max} />
  <div class="arrows" aria-hidden="true">
    <button aria-label="Increase" on:click={increase}>▲</button>
    <button aria-label="Decrease" on:click={decrease}>▼</button>
  </div>
</label>

<style lang="scss">
  .label,
  .input {
    background-color: var(--primary-color);
  }

  .label {
    display: inline-flex;
    align-items: center;
    height: 2.25em;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .input {
    position: relative;
    appearance: none;
    width: 2.5rem;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    color: inherit;

    &:focus {
      border-color: var(--white);
      outline: none;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      appearance: none;
      margin: 0;
    }
  }

  .arrows {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.5em;
  }
</style>
