<script lang="ts">
  import Modal from "./Modal.svelte";
  import cross from "assets/icons/cross.svg";

  export let openModal: boolean;

  const handleClickClose = () => (openModal = false);
</script>

<Modal bind:openModal>
  <div class="settings-modal">
    <h2 class="title">Settings</h2>
    <button on:click={handleClickClose} class="close-modal">
      <img src={cross} alt="Close Settings" />
    </button>
    <ul class="options reset-list">
      <slot />
    </ul>
  </div>
</Modal>

<style lang="scss">
  .settings-modal {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: var(--primary-color);
    padding: 0.65rem 1rem 1rem;
    width: 80%;
    max-width: 700px;
    min-width: 310px;
    min-height: 310px;
  }

  .title {
    font-size: 1.1rem;
    font-weight: normal;
    text-align: left;
    margin-top: 0;
    margin-bottom: 0;
  }

  .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5rem;
  }

  .options {
    display: grid;
    gap: 1rem;
  }
</style>
