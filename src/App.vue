<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/projects">Projects</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f1f1f;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #1f1f1f;

    &.router-link-exact-active {
      color: #5f5f5f;
    }
  }
}

body {
  margin: 0;
}
</style>
