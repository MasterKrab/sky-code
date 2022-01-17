<script lang="ts">
  export let direction: "horizontal" | "vertical";
</script>

<fieldset class="settings">
  <legend class="settings__legend"> Direction </legend>
  <div class="settings__group">
    <input
      class="settings__input"
      type="radio"
      name="direction"
      id="horizontal"
      bind:group={direction}
      value="horizontal"
    />
    <label class="settings__label" for="horizontal">Horizontal</label>
  </div>
  <div class="settings__group">
    <input
      class="settings__input"
      type="radio"
      name="direction"
      id="vertical"
      bind:group={direction}
      value="vertical"
    />
    <label class="settings__label" for="vertical">Vertical</label>
  </div>
</fieldset>

<style lang="scss">
  .settings {
    border: none;
    padding: 0;

    &__legend {
      font-size: 1.15rem;
    }

    &__group {
      display: flex;
      align-items: center;
      margin: 0.5rem;
    }

    &__input {
      margin-right: 0.5rem;
    }
  }
</style>
