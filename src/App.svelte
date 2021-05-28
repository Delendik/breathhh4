<script lang="ts">
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-navigator";
  import cookie from "js-cookie";
  import axios from "axios";
  import { storeToken, storeUser } from "./store.js";
  import { apiUrl } from "./config.js";
  import PageIndex from "./pages/PageIndex.svelte";
  import PageLogin from "./pages/PageLogin.svelte";
  import PageOnBoarding from "./pages/PageOnBoarding.svelte";

  const newToken = cookie.get("token");

  if (newToken) {
    storeToken.set(newToken);
    localStorage.setItem("token", newToken);
  }

  let dataLoaded;

  onMount(async () => {
    if (newToken || $storeToken) {
      const { data } = await axios.get(`${apiUrl}/profile`, {
        headers: { AUTHORIZATION: newToken || $storeToken },
      });

      storeUser.set(data);
    }

    dataLoaded = true;
  });
</script>

{#if dataLoaded}
  <Router>
    <Route path="/" component={PageIndex} />
    <Route path="/onboarding" component={PageOnBoarding} />
    <Route path="/login" component={PageLogin} />
  </Router>
{/if}
