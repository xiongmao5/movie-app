<template>
  <div id="app">
    <tabbar></tabbar>
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
*{
  margin: 0;
  padding: 0;
}
html, body {
  height: 100%;
}
ul {
  list-style: none;
}

</style>
<script>
import tabbar from '@/components/Tabbar.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    tabbar
  }
}
</script>
