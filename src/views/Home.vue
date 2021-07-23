<template>
  <div class="center">
    <h2>This app is project for Vue learning</h2>
    <router-link class="link" to="/todos">
      <span class="link-div">
        Todos
      </span>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style scoped>
  .link {
    font-size: 1.2rem;
    text-decoration-line: none;
  }

  .link-div {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(128, 128, 128, 0.726);
    border-radius: 7px;
    width: 100px;
    height: 40px;
    background-color: rgba(185, 185, 185, 0.507);
    transition: 0.5s;
  }

  .link-div:hover {
    background-color: rgba(128, 128, 128, 0.507);
    transition: 0.5s;
  }

  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .link:visited {
    color: black;
  }
</style>
