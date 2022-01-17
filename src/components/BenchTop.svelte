<script lang="ts">
  import { slide } from "svelte/transition";
  import chevronDownIcon from "assets/icons/chevron-down.svg";
  import Chart from "components/Chart.svelte";
  import Editor from "components/Editor.svelte";
  import type ChartData from "types/chartData";

  export let title: string;
  export let open = false;
  export let setupCode: string;
  export let chartData: ChartData;

  const handleInput = (e: Event) =>
    (title = (e.target as HTMLTitleElement).textContent);

  const handleToggle = () => (open = !open);
</script>

<div class="container">
  <div class="container__top">
    <h1
      class="title"
      contenteditable="true"
      spellcheck="false"
      on:input={handleInput}
    >
      {title}
    </h1>
    <button class="container__button" on:click={handleToggle}>
      <img
        class="container__image"
        src={chevronDownIcon}
        alt="Toggle more options"
      />
    </button>
  </div>
  {#if open}
    <div class="more" transition:slide|local={{ duration: 500 }}>
      <div class="setup">
        <h2 class="setup__title">Setup code</h2>
        <Editor bind:code={setupCode} />
      </div>
      <div class="chart">
        <Chart data={chartData} {title} />
      </div>
    </div>
  {/if}
</div>

<style lang="scss">
  .container {
    margin-bottom: 0.5rem;

    &__top {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      background-color: var(--primary-color);
      padding: 0.5rem;
    }

    &__button {
      display: block;
      width: 2rem;
      height: 2rem;
    }

    &__image {
      width: 100%;
    }
  }

  .more {
    display: grid;
    grid-template-rows: 1fr;
    grid-column: span 4;
    gap: 0.5rem;
    background-color: var(--secondary-color);
    padding-top: 0.5rem;

    @media screen and (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .title {
    font-size: 1.75rem;
    margin-top: 0;
    margin-bottom: 0;
    max-width: 80%;
  }

  .setup {
    display: grid;
    grid-template-rows: 1fr 230px;

    @media screen and (max-width: 768px) {
      order: 2;
    }

    &__title {
      background-color: var(--primary-color);
      margin-bottom: 0;
      margin-top: 0;
      font-size: 1rem;
      padding: 0.5rem;
    }
  }
</style>
