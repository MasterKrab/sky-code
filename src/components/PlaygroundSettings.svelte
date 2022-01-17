<script lang="ts">
  import Button from "./Button.svelte";
  import SettingsModal from "./SettingsModal.svelte";
  import Option from "./Option.svelte";
  import ChangeDirection from "./ChangeDirection.svelte";
  import InputRange from "./InputRange.svelte";
  import InputCheckbox from "./InputCheckbox.svelte";
  import settings from "assets/icons/settings.svg";
  import getIsMobile from "utils/getIsMobile";

  export let direction: "horizontal" | "vertical";
  export let fontSize: number;
  export let minFontSize: number;
  export let maxFontSize: number;
  export let lineWrapping: boolean;
  export let showLineNumbers: boolean;
  export let tabSize: number;
  export let semi: boolean;
  export let singleQuote: boolean;

  let openModal = false;
  let isMobile = getIsMobile();

  const handleOpenModal = () => (openModal = true);

  const handleResize = () => (isMobile = getIsMobile());
</script>

<svelte:window on:resize={handleResize} />

<Button label="Settings" icon={settings} on:click={handleOpenModal} />

<SettingsModal bind:openModal>
  {#if !isMobile}
    <Option>
      <ChangeDirection bind:direction />
    </Option>
  {/if}
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
      label="Line Wrap"
      name="line-wrapping"
      bind:checked={lineWrapping}
    />
  </Option>
  <Option>
    <InputCheckbox
      label="Show Line Numbers"
      name="line-numbers"
      bind:checked={showLineNumbers}
    />
  </Option>
  <Option>
    <InputRange
      label="Tab Size"
      name="tab-size"
      bind:value={tabSize}
      min={2}
      max={10}
    />
  </Option>
  <Option>
    <InputCheckbox label="Semicolon" name="semicolon" bind:checked={semi} />
  </Option>
  <Option>
    <InputCheckbox
      label="Single Quote"
      name="single-quote"
      bind:checked={singleQuote}
    />
  </Option>
</SettingsModal>
