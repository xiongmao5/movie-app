<template>
  <div>
    <div style="height:200px; background: yellow;">大轮播</div>
    <router-link to="/films/Nowplaying" active-class="panda">
        正在热映
    </router-link>
    <router-link to="/films/Comingsoon" active-class="panda">
        即将上映
    </router-link>
  <div><router-view></router-view></div>
  </div>
</template>
<style lang="scss">
  a {
    font-weight: bold;
    color: #2c3e50;

    &.panda {
      color: #42b983;
    }
  }
</style>
