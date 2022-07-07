<template>
  <div id="app">
    <tabbar ref="mytabbar" v-show="$store.state.isTabbarShow"></tabbar>
    <div class="foot">
      <router-view></router-view>
    </div>
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
  // box-sizing: border-box;
}
html, body {
  height: 100%;
  background: rgb(244, 244, 244);
}
ul {
  list-style: none;
}
.foot{
  margin-bottom: 3.0625rem;
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
