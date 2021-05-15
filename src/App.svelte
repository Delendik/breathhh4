<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import PageIndex from "./pages/PageIndex.svelte";
  import PageLogin from "./pages/PageLogin.svelte";
  import PageOnBoarding from "./pages/PageOnBoarding.svelte";

  export let url = "";
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<Router {url}>
  <Route path="/login" component={PageLogin} />
  <Route path="/onboarding" component={PageOnBoarding} />
  <Route path="/" component={PageIndex} />
</Router>

<style>
  :global(body) {
    padding: 0;
    font-family: "DM Sans", sans-serif;
  }
</style>
