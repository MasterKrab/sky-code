<script lang="ts">
  import Modal from "./Modal.svelte";
  import ModalCloseButton from "./ModalCloseButton.svelte";

  export let openModal: boolean;

  const handleClickClose = () => (openModal = false);
</script>

<Modal bind:openModal>
  <div class="settings-modal">
    <h2 class="title">Settings</h2>
    <ModalCloseButton on:click={handleClickClose} label="Close Settings" />
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

  .options {
    display: grid;
    gap: 1rem;
  }
</style>
