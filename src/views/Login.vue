<template>
  <div class="login">
    <span>用户名</span><input type="text" required>
    <button @click="handleLogin">登录</button>
  </div>
</template>
<style lang="scss">
  .login {
    width: 200px;
    height: 200px;
    background: lightblue;
  }
</style>
<script>
export default {
  methods: {
    handleLogin () {
      setTimeout(() => {
        localStorage.setItem('token', 'panda')
        // this.$router.back();
        this.$router.push(this.$route.query.redirect)
      }, 0)
    }
  }
}
</script>
