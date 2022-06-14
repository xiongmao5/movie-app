<template>
  <div id="app">
    <nav>
      <router-link to="/films" active-class="panda">电影
      </router-link> |
      <router-link to="/cinemas" active-class="panda">影院</router-link> |
      <router-link to="/center" active-class="panda">我的</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.panda {
      color: #42b983;
    }
  }
}
</style>
