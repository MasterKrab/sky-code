<script lang="ts">
  import { registerSW } from 'virtual:pwa-register'
  import { Router, Route } from "svelte-routing";
  import Header from "./components/Header.svelte";
  import Bench from "./pages/Bench.svelte";
  import Playground from "./pages/Playground.svelte";
  import Home from "./pages/Home.svelte";
  import FloatingFocus from "./components/FloatingFocus.svelte";
  import "./scss/normalize.scss";
  import "@fontsource/poppins";
  import "./scss/general.scss";
  
  registerSW({ immediate: true })
</script>

<Header />

<main class="main">
  <Router>
    <Route path="playground"><Playground /></Route>
    <Route path="bench"><Bench /></Route>
    <Route path="/"><Home /></Route>
    <Route>
      <h1>404</h1>
      <p>Page not found.</p>
    </Route>
  </Router>
</main>

<FloatingFocus />

<style lang="scss">
  .main {
    display: grid;
    grid-template-columns: 100%;
    height: 92vh;
    gap: 0.25rem;

    @media screen and (min-width: 650px) {
      grid-template-columns: 50px 1fr;
    }

    @media screen and (min-height: 800px) {
      max-height: 95vh;
    }
  }
</style>
