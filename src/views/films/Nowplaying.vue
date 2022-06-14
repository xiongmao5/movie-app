<template>
  <div>
    Nowplaying
    <ul>
      <li v-for="item of datalist" :key="item" @click="handleChangePage(item)">
          {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {
      datalist: [
        '111',
        '222',
        '333'
      ]
    }
  },
  methods: {
    handleChangePage (id) {
      console.log(id)
      // location.href = '#/detail'
      // this.$router.push(`/detail/${id}`)
      this.$router.push({
        name: 'pandaDetail',
        params: {
          id
        }
      })
    }
  }
}
</script>
