<template>
  <div class="padding">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check='false'
    >
      <van-cell v-for="item of datalist" :key="item.filmId" @click="handleChangePage(item.filmId)" >
        <img :src="item.poster" alt="">
        <div class="item-list">
          <div class="item-list-title">
            <span class="item-list-name">{{ item.name }}</span>
            <span class="item-list-item">{{ item.filmType.name }}</span>
          </div>
          <div class="item-list-details">
            <div :class="item.grade?'':'hidden'">
              观众评分 <span class="grade">{{ item.grade }}</span>
            </div>
            <div class="actor">
              主演: &nbsp;{{ item.actors | actorsFilter}}
            </div>
            <div>
              <span>{{ item.nation }}</span> |
              <span>{{ item.runtime }}分钟</span>
            </div>
          </div>
        </div>
        <div class="item-list-buy">
          <span>购票</span>
        </div>
      </van-cell>
    </van-list>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
Vue.filter('actorsFilter', (item) => {
  if (item === undefined) return '暂无主演'
  return item.map(data => data.name).join(' ')
})
export default {
  data () {
    return {
      datalist: [],
      loading: false,
      finished: false,
      current: 1,
      total: 0
    }
  },
  mounted () {
    http({
      url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=1&pageSize=10&type=1&k=6752560`,
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      // console.log(res.data);
      this.datalist = res.data.data.films
      this.total = res.data.data.total
    })
  },
  methods: {
    onLoad () {
      if (this.datalist.length === this.total && this.total !== 0) {
        this.finished = true
        return
      }
      // console.log('到底了')
      this.current++
      http({
        url: `/gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=1&k=6752560`,
        headers: {
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res => {
        // console.log(res.data);
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
        // console.log(this.current)
      })
    },
    handleChangePage (id) {
      // console.log(id)
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
<style lang="scss" scoped>
  .padding {
    padding-bottom: 3.1875rem;
    height: 100%;
  }
  .van-list {
    background: white;
  }
  .van-cell__value {
    display: flex;
    align-items: center;
  }
  img {
    width: 4.125rem;
    height: 6.1113rem;
  }
  .item-list {
    padding: 0 .625rem;
  }
  .item-list-name {
    font-size: 1rem;
    color: rgb(25, 26, 27);
    font-weight: 400;
    line-height: 1.375rem;
    height: 1.375rem;
    margin-right: .3125rem;
    vertical-align: middle;
  }
  .item-list-title{
    vertical-align: middle;
    width: 13.075rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-list-item {
    display: inline-block;
    color: white;
    width: 1.2619rem;
    height: .875rem;
    background: rgb(210, 214, 220);
    padding: 0 .125rem;
    font-size: .75rem;
    border-radius: .125rem;
    line-height: .875rem;
    vertical-align: middle;
    text-align: center;
  }
  .item-list-details {
    line-height: 1.3125rem;
    font-size: .8125rem;
    color: rgb(121, 125, 130);
    width: 13.075rem;
    .grade {
      color: rgb(255, 178, 50);
      font-size: .875rem;
    }
    .actor {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 100%;
    }
  }
  .hidden {
    visibility: hidden;
  }
  .item-list-buy span{
    box-sizing: border-box;
    color: rgb(255, 95, 22);
    border: 1px solid rgb(255, 95, 22);
    font-size: .8125rem;
    border-radius: .25rem;
    text-align: center;
    width: 3.125rem;
    height: 1.5625rem;
    line-height: 1.5625rem;
    display: table-cell;
    vertical-align: middle;
  }
</style>
