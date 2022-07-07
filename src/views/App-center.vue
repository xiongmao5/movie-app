<template>
  <div>
    <div class="title">
        <div class="title-img" @click="handleLogin()">
          <img src="../assets/images/download.png" alt="">
        </div>
        <span @click="handleLogin()">
          立即登录
        </span>
    </div>
    <div class="order">
      <div>
          <span class="iconfont icon-dianyingpiao"></span>
          <span>电影订单</span>
      </div>
      <div>
          <span class="iconfont icon-order"></span>
          <span>电影订单</span>
      </div>
    </div>
    <ul>
      <li>
        <div>
          <i class="iconfont icon-qianbao"></i>
          <span>卖座券</span>
        </div>
        <i class="iconfont icon-jiantouyou"></i>
      </li>
      <li>
        <div>
          <i class="iconfont icon-hongbao"></i>
          <span>组合红包</span>
        </div>
        <i class="iconfont icon-jiantouyou"></i>
      </li>
      <li>
        <div>
          <i class="iconfont icon-yue"></i>
          <span>余额</span>
        </div>
        <div>
          <span>￥0</span>
          <i class="iconfont icon-jiantouyou"></i>
        </div>
      </li>
      <li>
        <div>
          <i class="iconfont icon-kehufuwukefu"></i>
          <span>帮助与客服</span>
        </div>
        <i class="iconfont icon-jiantouyou"></i>
      </li>
      <li>
        <div>
          <i class="iconfont icon-shezhi"></i>
          <span>设置</span>
        </div>
        <i class="iconfont icon-jiantouyou"></i>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.title {
  background-image: url(../assets/images/title.png);
  height: 9.125rem;
  display: flex;
  gap: 1.25rem;
  align-items: center;
  padding-top: .625rem;
  padding-left: 1.375rem;
  .title-img {
    width: 4.1875rem;
    height: 4.1875rem;
    border-radius: 50%;
    border: 2px solid white;
    overflow: hidden;
    object-fit: cover;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  span {
    color: white;
  }
}
.order {
  width: 100%;
  height: 5rem;
  display: flex;
  background: white;
  margin-bottom: .625rem;
  div {
    width: 50%;
    height: 3.125rem;
    text-align: center;
    line-height: 3.125rem;
    display: flex;
    flex-direction: column;
    .icon-dianyingpiao {
      color: #ffc82f;
      font-size: 1.625rem;
    }
    .icon-order {
      color: #c6da5c;
      font-size: 1.625rem;
    }
    span {
      height: 1.75rem;
      line-height: 3.5rem;
      font-size: .8125rem;
      color: #797d82;
    }
  }
}
ul {
  background: white;
  li {
    height: 3.0625rem;
    line-height: 3.0625rem;
    padding: 0 .9375rem;
    border-bottom: 1px solid rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
    span {
      display: inline-block;
      padding-left: .9375rem;
    }
    div {
      display: flex;
    }
    .icon-qianbao {
      color: #ff8a6a;
    }
    .icon-hongbao {
      color: #bfa984;
    }
    .icon-yue {
      color: #ffb334;
    }
    .icon-kehufuwukefu {
      color: #5a8fb6;
    }
    .icon-shezhi {
      color: #b8cb51;
    }
    .iconfont {
      font-size: 1.25rem;
      width: 1.25rem;
    }
    .icon-jiantouyou {
      font-size: .3125rem;
      text-align: right;
    }
  }
}
</style>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handleLogin () {
      this.$router.push('/login')
    }
  }
}
</script>
