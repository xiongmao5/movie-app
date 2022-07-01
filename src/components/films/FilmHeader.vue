<template>
  <div>
    <ul>
      <router-link to="/films/nowplaying" active-class="panda">
        <li>
          <span>正在热映</span>
        </li>
      </router-link>
      <router-link to="/films/comingsoon" active-class="panda">
        <li>
          <span>即将上映</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    line-height: 2.9375rem;
    li {
      flex: 1;
      text-align: center;
    }
    a {
      text-decoration: none;
      font-size: .875rem;
      color: black;
      &.panda {
        color: #ff5f16;
        border-bottom: 2px solid;
      }
    }
  }
</style>
