<script lang="ts">
  import Modal from "./Modal.svelte";
  import ModalCloseButton from "./ModalCloseButton.svelte";

  export let error: string;

  const handleCloseModal = () => (error = null);
</script>

<Modal on:close={handleCloseModal} openModal={!!error}>
  <div class="error-modal">
    <h2 class="title">Error</h2>
    <ModalCloseButton on:click={handleCloseModal} />
    <p>
      {error}
    </p>
  </div>
</Modal>

<style lang="scss">
  .error-modal {
    position: relative;
    background-color: var(--secondary-color);
    padding: 1rem;
    width: 75%;
    max-width: 600px;
    min-width: 310px;
    padding: 1rem;
    font-size: 1.5rem;
    color: var(--danger-color);
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: left;
    margin-top: 0;
    color: var(--white);
  }
</style>
