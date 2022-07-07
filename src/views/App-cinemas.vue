<template>
  <div>
    <van-nav-bar title="影院" ref="navbar" @click-left="handleLeft" @click-right="handleRight">
      <template #left>
        <span class="position">{{ cityName }}</span>
        <van-icon name="arrow-down" size='1' color='black' />
      </template>
      <template #right>
        <van-icon name="search" size="24"  color='black'/>
      </template>
    </van-nav-bar>
    <div class="box" :style="{
        height: height
      }">
      <ul>
        <li v-for="data of cinemaList" :key="data.cinemaId">
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
  </div>
</template>
<script>
// import http from '@/util/http'
import BScroll from 'better-scroll'
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      height: '0'
    }
  },
  computed: {
    ...mapState(['cinemaList', 'cityName'])
  },
  mounted () {
    this.height = document.documentElement.clientHeight -
                  this.$refs.navbar.$el.offsetHeight -
                  document.querySelector('footer').offsetHeight + 'px'
    // this.$store.dispatch('getCinemaData')
    if (this.cinemaList.length === 0) {
      this.getCinemaData().then(res => {
        this.$nextTick(() => {
          new BScroll('.box', {
            pullUpLoad: true,
            scrollbar: true,
            pullDownRefresh: true
          // and so on
          })
        })
      })
    } else {
      this.$nextTick(() => {
        new BScroll('.box', {
          pullUpLoad: true,
          scrollbar: true,
          pullDownRefresh: true
        // and so on
        })
      })
    }
    // http({
    //   url: `/gateway?cityId=${this.$store.state.cityId}&ticketFlag=1&k=3524953`,
    //   headers: {
    //     'X-Host': 'mall.film-ticket.cinema.list'
    //   }
    // }).then(res => {
    //   // console.log(res.data.data.cinemas)
    //   this.cinemaList = res.data.data.cinemas
    // this.$nextTick(() => {
    //   const bs = new BScroll('.box', {
    //     pullUpLoad: true,
    //     scrollbar: true,
    //     pullDownRefresh: true
    //   // and so on
    //   })
    // })
    // })
  },
  methods: {
    ...mapActions(['getCinemaData']),

    handleLeft () {
      this.$router.push('/city')
    },
    handleRight () {
      this.$router.push('/cinemas/search')
    }
  }
}
</script>
<style lang="scss" scoped>
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
  .box {
    // height: 38.6875rem;
    overflow: hidden;
    background: white;
    position: relative;
  }
  .position {
    font-size: .8125rem;
  }
</style>
