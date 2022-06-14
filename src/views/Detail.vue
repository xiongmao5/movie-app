<template>
  <div>
    详情
  </div>
</template>
<script>
export default {
  created () {
    console.log('created', this.$route.params.id)
  }
}
</script>
