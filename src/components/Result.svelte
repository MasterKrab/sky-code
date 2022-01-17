<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import SettingsModal from "./SettingsModal.svelte";
  import Option from "./Option.svelte";
  import InputRange from "./InputRange.svelte";
  import InputCheckbox from "./InputCheckbox.svelte";
  import settings from "assets/icons/settings.svg";
  import playIcon from "assets/icons/play.svg";
  import deleteIcon from "assets/icons/delete.svg";

  export let title: string;
  export let index: string;
  export let output: number;
  export let tests: number;
  export let fastest: number;
  export let slowest: number;
  export let fontSize = 14;
  export let minFontSize = 10;
  export let maxFontSize = 60;
  export let lineWrapping = false;

  let openModal = false;

  const dispatch = createEventDispatcher();

  const handleOpenSettings = () => (openModal = true);

  const handleRun = () => dispatch("run", { index });
  const handleRemove = () => dispatch("remove", { index });
</script>

<div class="result scrollbar">
  <input class="result__input" bind:value={title} aria-label="Title" />

  <section class="result__buttons">
    <button
      class="result__button-modal"
      on:click={handleOpenSettings}
      aria-label="Open settings for test {title}"
    >
      <img src={settings} alt="Settings" />
    </button>

    <SettingsModal bind:openModal>
      <Option>
        <InputRange
          label="Font size"
          name="font-size"
          bind:value={fontSize}
          min={minFontSize}
          max={maxFontSize}
        />
      </Option>
      <Option>
        <InputCheckbox
          label="Line wrapping"
          name="line-wrapping"
          bind:checked={lineWrapping}
        />
      </Option>
    </SettingsModal>

    <button
      class="result__button"
      on:click={handleRun}
      aria-label="Run {title} test"
    >
      <img class="result__icon" src={playIcon} alt="Run" />
    </button>
    <button
      class="result__button"
      on:click={handleRemove}
      aria-label="Remove {title} test"
    >
      <img class="result__icon" src={deleteIcon} alt="Remove" />
    </button>
  </section>

  {#if output}
    <p>{tests} tests</p>
    <p>{output} Miliseconds</p>
    {#if output === fastest}
      <p class="result__name result__name--fastest">Fastest</p>
    {:else if output === slowest}
      <p class="result__name result__name--slowest">Slower</p>
    {/if}
  {/if}
</div>

<style lang="scss">
  .result {
    position: relative;
    background-color: var(--primary-color);
    padding: 1rem;
    color: #fff;
    text-align: center;
    overflow-y: scroll;

    &__buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 1rem;
    }

    &__button-modal {
      position: absolute;
      top: 0;
      left: 0;
      padding: 0.5rem;
    }

    &__button {
      max-width: 50px;

      @media (hover: hover) {
        transition: transform 0.2s;

        &:hover {
          transform: scale(0.9);
        }
      }
    }

    &__input {
      background-color: transparent;
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      color: inherit;
      border: none;
      text-align: center;
    }

    &__name {
      font-size: 1.5rem;
      margin-top: 1.5rem;
      margin-bottom: 0.5rem;
      filter: drop-shadow(5px 2px 0.75rem rgba(255, 255, 255, 0.5));

      &--fastest {
        color: var(--success-color);
      }

      &--slowest {
        color: var(--danger-color);
      }
    }
  }
</style>
