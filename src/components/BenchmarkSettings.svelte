<script lang="ts">
  import Button from "./Button.svelte";
  import SettingsModal from "components/SettingsModal.svelte";
  import InputRange from "components/InputRange.svelte";
  import Option from "components/Option.svelte";
  import settings from "assets/icons/settings.svg";

  export let tests: number;

  let openModal = false;

  const handleOpenModal = () => (openModal = true);
</script>

<Button label="Settings" icon={settings} on:click={handleOpenModal} />

<SettingsModal bind:openModal>
  <Option>
    <InputRange
      label="Number of tests"
      name="number-tests"
      bind:value={tests}
      min={1}
      max={200}
    />
  </Option>
</SettingsModal>
