<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import PageIndex from "./pages/PageIndex.svelte";
  import PageLogin from "./pages/PageLogin.svelte";
  import PageOnBoarding from "./pages/PageOnBoarding.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/login" component={PageLogin} />
  <Route path="/onboarding" component={PageOnBoarding} />
  <Route path="/" component={PageIndex} />
</Router>
