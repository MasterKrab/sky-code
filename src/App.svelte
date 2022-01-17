<script lang="ts">
  import { registerSW } from "virtual:pwa-register";
  import { Router, Route } from "svelte-routing";
  import Header from "components/Header.svelte";
  import MainEditor from "components/MainEditor.svelte";
  import Main from "components/Main.svelte";
  import Bench from "pages/Bench.svelte";
  import Playground from "pages/Playground.svelte";
  import Home from "pages/Home.svelte";
  import FloatingFocus from "components/FloatingFocus.svelte";
  import "./scss/normalize.scss";
  import "@fontsource/poppins";
  import "./scss/general.scss";

  registerSW({ immediate: true });
</script>

<Header />

<Router>
  <Route path="playground">
    <MainEditor>
      <Playground />
    </MainEditor>
  </Route>
  <Route path="bench">
    <MainEditor>
      <Bench />
    </MainEditor>
  </Route>
  <Route path="/">
    <Main>
      <Home />
    </Main>
  </Route>
  <Route>
    <Main>
      <h1>404</h1>
      <p>Page not found.</p>
    </Main>
  </Route>
</Router>

<FloatingFocus />
