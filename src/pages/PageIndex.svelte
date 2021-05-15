<script lang="ts">
  import LayoutCenter from "../comp/LayoutCenter.svelte";
</script>

<LayoutCenter>
  <div>
    <h1 class="title">Breathhh</h1>
    <a class="link" href="#">Install from Google Store</a>
  </div>
</LayoutCenter>

<style>
  .title {
    margin: 0 0 25px;
    text-align: center;
  }

  .link {
    display: inline-flex;
    padding: 12px 24px;
    background-color: #eb6135;
    font-size: 18px;
    color: white;
    box-shadow: 0px 2px 0px #d33f32;
    border-radius: 4px;
  }
</style>
