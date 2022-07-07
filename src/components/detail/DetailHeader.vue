<template>
  <div class="header">
    <i class="iconfont" @click="handleBack">&#xe659;</i>
    <slot></slot>
  </div>
</template>
<script>
export default {
  methods: {
    handleBack () {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  background: white;
  text-align: center;
  display: block;
  z-index: 100;
  font-size: 1.0625rem;
}
.iconfont {
  position: absolute;
  left: .625rem;
  top: 0;
  font-size: 1.5rem;
}
</style>
