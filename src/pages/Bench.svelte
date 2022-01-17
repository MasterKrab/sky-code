<script lang="ts">
  import apiCall from "utils/apiCall";
  import HeadTitle from "components/HeadTitle.svelte";
  import Spinner from "components/Spinner.svelte";
  import Button from "components/Button.svelte";
  import BenchmarkSettings from "components/BenchmarkSettings.svelte";
  import BenchTop from "components/BenchTop.svelte";
  import BenchEditor from "components/BenchEditor.svelte";
  import chevronRightIcon from "assets/icons/chevron-right.svg";

  const MAX_BENCHMARKS = 10;

  interface Editor {
    title: string;
    code: string;
    output?: any;
    tests?: number;
  }

  let title = "Benchmark";
  let setupCode = "";
  let editors: Editor[] = [];
  let tests: number = 50;

  let fastest: number;
  let slowest: number;

  let isLoading = false;

  const finallyCallback = () => (isLoading = false);

  const mutateEditors = (
    index: number,
    callback: (editor: Editor) => object
  ) => {
    const newEditors = [...editors];
    newEditors[index] = {
      ...newEditors[index],
      ...callback(newEditors[index]),
    };
    editors = newEditors;
  };

  const calculateFastestAndSlowest = () => {
    const outputs = editors.map(({ output }: Editor) => output);
    fastest = Math.min(...outputs);
    slowest = Math.max(...outputs);
  };

  const testCode = ({ detail }: CustomEvent) => {
    const index = detail.index as number;

    isLoading = true;

    const actualTests = tests;

    apiCall<number>("test", {
      tests: actualTests,
      code: editors[index].code,
      setupCode,
    })
      .then((output) => {
        mutateEditors(index, () => ({ tests: actualTests, output }));
        calculateFastestAndSlowest();
      })
      .finally(finallyCallback);
  };

  const testAllCodes = () => {
    const codes = editors.map(({ code }: Editor) => code);

    isLoading = true;

    const actualTests = tests;

    apiCall<number[]>("test-many", { tests: actualTests, codes, setupCode })
      .then((result) => {
        console.log(result);

        editors = editors.map((editor, index) => ({
          ...editor,
          tests: actualTests,
          output: result[index],
        }));

        calculateFastestAndSlowest();
      })
      .finally(finallyCallback);
  };

  const addTest = () => {
    editors = [...editors, { title: `Test ${editors.length + 1}`, code: "" }];
  };

  if (!editors.length) {
    addTest();
    addTest();
  }

  const removeTest = ({ detail }: CustomEvent) => {
    const indexToRemove = detail.index as number;
    editors = editors.filter((_, index) => indexToRemove !== index);
  };
</script>

<HeadTitle text="Benchmark" />

<div class="left-bar">
  <BenchmarkSettings bind:tests />
  <Button
    label="Run all tests"
    icon={chevronRightIcon}
    on:click={testAllCodes}
  />
  <Button
    label="Add new test"
    text="+"
    on:click={addTest}
    disabled={editors.length >= MAX_BENCHMARKS}
  />
</div>

{#if isLoading}
  <Spinner />
{/if}

<div class="principal scrollbar">
  <BenchTop
    bind:title
    bind:setupCode
    chartData={editors.map(({ title, output }) => ({
      x: title,
      y: output || 0,
    }))}
  />
  <div class="editors">
    {#each editors as editor, index}
      <BenchEditor
        on:run={testCode}
        on:remove={removeTest}
        bind:code={editor.code}
        bind:title={editor.title}
        {...editor}
        {fastest}
        {slowest}
        {index}
      />
    {/each}
  </div>
</div>

<style lang="scss">
  .principal {
    overflow-y: auto;
  }

  .editors {
    display: grid;
    grid-template-columns: 1fr;
    align-items: start;
    gap: 0.5rem;
  }
</style>
