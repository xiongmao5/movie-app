<template>
  <div class="login">
    <van-field
      center
      placeholder="请输入手机号"
    >
      <template #button>
        <van-button size="small" type="primary">获取验证码</van-button>
      </template>
    </van-field>
    <van-cell-group>
      <van-field placeholder="验证码" />
    </van-cell-group>
    <button @click="handleLogin" class="login-button">登录</button>
    <div class="testing">
      收不到验证码?
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .login {
    width: 100%;
    height: 41.6875rem;
    background: white;
    text-align: center;
    .login-button {
      width: 20.3125rem;
      height: 2.75rem;
      background: #e55513;
      border-radius: .25rem;
      border: none;
      color: white;
      margin-top: 3.125rem;
    }
    .testing {
      text-align: right;
      padding-right: 1.5625rem;
      margin-top: .9375rem;
      color: #797d82;
      font-size: .8125rem;
    }
  }
</style>
<script>
import Vue from 'vue'
import { Field } from 'vant'

Vue.use(Field)
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', 'panda')
        // this.$router.back();
        this.$router.push('/center')
      }, 0)
    }
  }
}
</script>
