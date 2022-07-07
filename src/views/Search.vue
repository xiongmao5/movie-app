<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        show-action
        autofocus
        placeholder="输入影城名称"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <ul v-if="value">
      <li v-for="data of computedList" :key="data.cinemaId">
        <div class="left">
          <div class="left-top">{{ data.name }}</div>
          <div class="left-bottom">{{ data.address }}</div>
        </div>
        <div class="right">
          <div class="right-top"><span>￥</span>{{ data.lowPrice / 100 }}<span>起</span></div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from 'vant'
import obj from '@/util/mixinObj'
export default {
  mixins: [obj],
  data () {
    return {
      value: ''
    }
  },
  computed: {
    computedList () {
      return this.$store.state.cinemaList.filter(item => item.name.toUpperCase().includes(this.value.toUpperCase()) || item.address.toUpperCase().includes(this.value.toUpperCase()))
    }
  },
  mounted () {
    if (this.$store.state.cinemaList.length === 0) {
      this.$store.dispatch('getCinemaData')
    } else {
      console.log('缓存')
    }
  },
  methods: {
    onSearch (val) {
      Toast(val)
    },
    onCancel () {
      Toast({
        message: '取消',
        duration: '500'
      })
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
  ul {
    background: white;
  }
  li {
    padding: .9375rem;
    display: flex;
    justify-content: space-between;
    .left {
      width: 13.25rem;
      .left-top {
        font-size: .9375rem;
        height: 1.4063rem;
        line-height: 1.4063rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .left-bottom {
        font-size: .75rem;
        height: 1.125rem;
        line-height: 1.125rem;
        margin-top: .3125rem;
        color: rgb(121, 125, 130);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .right {
      width: 4.375rem;
      .right-top {
        color: rgb(255, 95, 22);
        font-size: .9375rem;
        height: 1.4063rem;
        line-height: 1.4063rem;
        text-align: center;
        span {
          font-size: .75rem;
          line-height: 1.125rem;
        }
      }
    }
  }
</style>
