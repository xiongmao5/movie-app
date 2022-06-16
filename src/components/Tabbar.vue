<template>
  <footer>
    <ul>
      <li>
        <router-link to="/films" active-class="panda">
        <span class="iconfont">&#xe62e;</span>电影
        </router-link>
      </li>
      <li>
        <router-link to="/cinemas" active-class="panda">
        <span class="iconfont">&#xe8c0;</span>影院
        </router-link>
        </li>
      <li>
        <router-link to="/center" active-class="panda">
        <span class="iconfont">&#xe615;</span>我的
        </router-link>
      </li>
    </ul>
  </footer>
</template>
<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3.0625rem;
    background: white;
    ul {
      display: flex;
      justify-content: space-around;
    }
    li{
      flex: 1;
      text-align: center;
      font-size: 1rem;
      line-height: 3.0625rem;
    }
    a {
      font-weight: bold;
      color: #797d82;
      text-decoration: none;
      font-size: .625rem;

      &.panda {
        color: #ff5f16;
      }
    }
  }
</style>
