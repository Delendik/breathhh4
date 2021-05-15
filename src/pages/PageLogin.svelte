<script lang="ts">
  import LayoutCenter from "../comp/LayoutCenter.svelte";
</script>

<LayoutCenter>
  <div>
    <h1 class="title">Please login to start Breathhh</h1>
    <p class="subtitle">
      This is to fine-tune the beneficial practices specifically for you
    </p>
    <div class="btn-warp">
      <a class="link link--google" href="#"><span>Continue with Google</span></a
      >
      <a class="link link--facebook" href="#"
        ><span>Continue with Facebook</span></a
      >
    </div>
  </div>
</LayoutCenter>

<style>
  .title {
    font-size: 32px;
    color: #3d3a4b;
    text-align: center;
    margin: 0 0 15px;
  }

  .subtitle {
    font-size: 20px;
    color: #615f68;
    text-align: center;
  }

  .btn-warp {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    gap: 12px;
    margin-top: 45px;
  }

  .link {
    position: relative;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
    font-size: 18px;
    color: #3d3a4b;
    padding: 15px 15px 15px 64px;
  }

  .link::before {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    width: 24px;
    height: 24px;
  }

  .link--google::before {
    background: url("/assets/icon-google.svg") 0 0 / cover no-repeat;
  }

  .link--facebook::before {
    background: url("/assets/icon-facebook.svg") 0 0 / cover no-repeat;
  }
</style>
