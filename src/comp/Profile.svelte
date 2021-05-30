<script lang="ts">
  import { useNavigate } from "svelte-navigator";
  import cookie from "js-cookie";
  import { storeUser } from "../store";
  import { chromeExtUrl, sendMessageToExt } from "../config";

  const navigate = useNavigate();

  const handleReset = () => {
    cookie.remove("token");
    storeUser.set(null);

    sendMessageToExt("logout");

    navigate("/login", { replace: true });
  };
</script>

<div class="root">
  <div class="inner">
    <img
      width="32"
      height="32"
      class="avatar"
      src={$storeUser.facebook_auth_hash.info.image}
      alt="User Avatar"
    />
    <div>{$storeUser.name}</div>
  </div>

  <div class="dropdown">
    <div class="dropdown__inner">
      <div class="dropdown__item">
        <a href={chromeExtUrl}>Extension&nbsp;in&nbsp;Store</a>
      </div>
      <div class="dropdown__item" on:click={handleReset}>Logout</div>
    </div>
  </div>
</div>

<style>
  .root {
    position: relative;
  }

  .inner {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  .avatar {
    margin-right: 8px;
  }

  .dropdown {
    padding-top: 20px;
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
  }

  .root:hover .dropdown {
    display: block;
  }

  .dropdown__inner {
    background: #ffffff;
    box-shadow: 0px 8px 24px rgba(28, 65, 84, 0.08),
      0px 24px 128px rgba(28, 65, 84, 0.12);
    border-radius: 16px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .dropdown__item {
    padding-top: 20px;
    padding-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s;
  }

  .dropdown__item:not(:last-child) {
    border-bottom: 1px solid #e7edf3;
  }

  .dropdown__item:hover {
    opacity: 0.8;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
</style>
