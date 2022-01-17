<script lang="ts">
  import type ChartData from "types/chartData";
  import ApexCharts from "apexcharts";

  let element: Node;

  export let data: ChartData;
  export let title: string;
  let chart: ApexCharts;
  let options: ApexCharts.ApexOptions;

  const colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];

  $: options = {
    colors,
    title: {
      text: title,
      show: title.trim(),
      align: "center",
      floating: true,
      margin: 10,
      style: {
        fontFamily: "Poppins",
        fontWeight: "normal",
        color: "#000",
      },
    },
    series: [
      {
        data,
        name: "Miliseconds",
      },
    ],
    chart: {
      height: 250,
      type: "bar",
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
  };

  $: if (element && options) {
    if (chart) {
      chart.updateOptions(options);
    } else {
      chart = new ApexCharts(element, options);
      chart.render();
    }
  }
</script>

<div class="container" bind:this={element} />

<style>
  .container {
    background-color: var(--white);
    color: #000;
  }
</style>
