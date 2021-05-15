<script lang="ts">
  import DevelopedBy from "./DevelopedBy.svelte";
</script>

<div class="root">
  <main class="content">
    <slot />
  </main>

  <div class="footer">
    <DevelopedBy />
  </div>
</div>

<style>
  .root {
    display: grid;
    grid-template-rows: 1fr auto;
    min-height: 100vh;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .footer {
    padding: 40px;
  }
</style>
