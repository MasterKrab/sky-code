<script lang="ts">
  export let label: string;
  export let name: string;
  export let value: number;
  export let min: number;
  export let max: number;
</script>

<div class="settings">
  <label class="settings__label" for="font-size">
    {label}
    <span class="settings__value">{value}</span>
  </label>
  <input
    class="settings__input input-range"
    type="range"
    id="font-size"
    bind:value
    {name}
    {min}
    {max}
  />
</div>

<style lang="scss">
  .settings {
    display: flex;
    flex-direction: column;
    font-size: min(1rem, 5vw);

    &__label {
      display: flex;
      justify-content: space-between;
    }

    &__input {
      width: 100%;
      margin-top: 0.5rem;
    }
  }
</style>
