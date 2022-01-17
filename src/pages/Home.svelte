<script lang="ts">
  import HeadTitle from "components/HeadTitle.svelte";
  import Styles from "components/Styles.svelte";
</script>

<HeadTitle text="Home" />

<Styles
  css={`
   body{
      background-color: var(--primary-color);
   }
`}
/>

<div class="container">
  <h1 class="title">The simplest way to test your javascript</h1>

  <p class="text">Play and test your JavaScript or TypeScript code</p>

  <div class="rocket">🚀</div>
</div>

<style lang="scss">
  .container {
    text-align: center;
    margin-top: 2rem;
    padding: 1.5rem;

    @media screen and (min-width: 650px) {
      grid-column: span 2;
    }
  }

  .title {
    font-size: min(3rem, 7.5vw);
  }

  .text {
    font-size: min(1.5rem, 4vw);
  }

  @keyframes levitate {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  .rocket {
    margin-top: 5rem;
    font-size: min(8rem, 20vw);
    animation: levitate 2s infinite;
    text-shadow: 0 0 10px #fff;
  }
</style>
