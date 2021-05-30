<script lang="ts">
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-navigator";
  import cookie from "js-cookie";
  import axios from "axios";
  import { storeToken, storeUser } from "./store.js";
  import { apiUrl, sendMessageToExt } from "./config.js";
  import PageIndex from "./pages/PageIndex.svelte";
  import PageLogin from "./pages/PageLogin.svelte";
  import PageOnBoarding from "./pages/PageOnBoarding.svelte";

  const AUTHORIZATION = cookie.get("token");

  if (AUTHORIZATION) {
    storeToken.set(AUTHORIZATION);
  }

  let dataLoaded;

  onMount(async () => {
    if (AUTHORIZATION) {
      const { data } = await axios.get(`${apiUrl}/profile`, {
        headers: { AUTHORIZATION },
      });

      storeUser.set(data);

      sendMessageToExt("userLoginIn");
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
