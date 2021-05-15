<script lang="ts">
  import { Router, Route } from "svelte-navigator";
  import PageIndex from "./pages/PageIndex.svelte";
  import PageLogin from "./pages/PageLogin.svelte";

  export let url = "";
</script>

<Router {url}>
  <Route path="/login" component={PageLogin} />
  <Route path="/" component={PageIndex} />
</Router>
