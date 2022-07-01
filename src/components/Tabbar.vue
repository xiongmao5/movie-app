<template>
  <footer>
    <ul>
      <router-link to="/films" active-class="panda">
        <li>
          <i class="iconfont">&#xe630;</i>
          <span>电影</span>
        </li>
      </router-link>
      <router-link to="/cinemas" active-class="panda">
        <li>
          <i class="iconfont">&#xe8c0;</i>
          <span>影院</span>
        </li>
      </router-link>
      <router-link to="/center" active-class="panda">
        <li>
          <i class="iconfont">&#xe615;</i>
          <span>我的</span>
        </li>
      </router-link>

    </ul>
  </footer>
</template>
<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 51px;
    background: white;
    z-index: 10000;
    ul {
      display: flex;
      justify-content: space-around;
      // background: rgba(0, 0, 0, .1);
    }
    li {
      flex: 1;
      text-align: center;
      font-size: 1rem;
      line-height: 1.5rem;
      display: flex;
      flex-direction: column;
    }
    i {
      font-size: 1.5rem
    }
    span {
      font-size: 1rem;
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
