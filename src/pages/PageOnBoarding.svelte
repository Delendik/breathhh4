<script lang="ts">
  import LayoutCenter from "../comp/LayoutCenter.svelte";
  import Profile from "../comp/Profile.svelte";

  const handleCloseTab = () => {
    // Scripts may close only the windows that were opened by them.
    window.close();
  };
</script>

<LayoutCenter>
  <div class="root">
    <div class="profile-wrap">
      <Profile />
    </div>
    <div class="pieace">✌️</div>
    <h1 class="title">
      From time to time when you open the tabs you will see a tool for breathing
      practice
    </h1>
    <div class="images">
      <div class="image-top" />
      <div class="image-bottom" />
    </div>
    <p class="subtitle" on:click={handleCloseTab}>
      Close this page and start browser surfing
    </p>
  </div>
</LayoutCenter>

<style>
  .root {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
  }

  .profile-wrap {
    position: absolute;
    top: 40px;
    right: 40px;
  }

  .pieace {
    font-size: 60px;
    text-align: center;
  }

  .title {
    margin: 0 0 35px;
    font-size: 32px;
    text-align: center;
  }

  .images {
    filter: drop-shadow(0px 48px 128px rgba(28, 65, 84, 0.12));
  }

  .image-top {
    height: 48px;
    width: 622px;
    background: url("/assets/browser-header.png") 0 0 / cover no-repeat;
  }

  .image-bottom {
    height: 48px;
    width: 622px;
    background: url("/assets/browser-search-bar.png") 0 0 / cover no-repeat;
  }

  .subtitle {
    margin: 50px 0 0;
    font-size: 20px;
    color: #f6803e;
    text-align: center;
    cursor: pointer;
  }
</style>
