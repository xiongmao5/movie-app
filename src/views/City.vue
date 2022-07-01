<template>
  <div>
    <div class="city">
      <div class="icon" @click="handleCity">
        <i class="iconfont icon-chahao"></i>
      </div>
      <span>当前城市 -</span>
    </div>
    <van-search v-model="value" placeholder="请输入城市名" />
    <div class="hot-city">
      <div class="hot-city-title">
        热门城市
      </div>
      <ul>
        <li v-for="hot of computedHotList" :key="hot.cityId" @click="handleClick(hot)">
          {{ hot.name }}
        </li>
      </ul>
    </div>
    <van-index-bar :index-list="computedList" @select="handleChange">
      <div v-for="data of cityList" :key="data.type">
        <van-index-anchor :index="data.type" />
        <van-cell v-for="item of data.list" :key="item.cityId" :title="item.name"  @click="handleClick(item)"/>
      </div>
    </van-index-bar>
  </div>
</template>
<script>
import http from '@/util/http'
import { Toast, Search } from 'vant'
import obj from '@/util/mixinObj'
import Vue from 'vue'

Vue.use(Search)

export default {
  mixins: [obj],
  data () {
    return {
      cityList: [],
      value: '',
      hotCityList: [],
      hotList: []
    }
  },
  computed: {
    computedList () {
      return this.cityList.map(item => item.type)
    },
    computedHotList () {
      for (let i = 0; i < this.hotCityList.length; i++) {
        if (this.hotCityList[i].isHot === 1) {
          // eslint-disable-next-line
          this.hotList.push(this.hotCityList[i])
        }
      }
      // console.log(this.hotList)
      return this.hotList
    }
  },
  mounted () {
    http({
      url: '/gateway?k=4550666',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }).then(res => {
      console.log(res.data.data.cities)
      this.cityList = this.renderCity(res.data.data.cities)
      // console.log(this.cityList)
      this.hotCityList = res.data.data.cities
    })
  },
  methods: {
    handleCity () {
      this.$router.push('nowplaying')
    },
    handleChange (data) {
      // console.log('change', data)
      Toast(data)
    },
    renderCity (list) {
      const cityList = []
      const letterList = []
      for (let i = 65; i < 91; i++) {
        letterList.push(String.fromCharCode(i))
      }
      letterList.forEach(letter => {
        const newList = list.filter(item => item.pinyin.substring(0, 1).toUpperCase() === letter)
        // console.log(newList)
        newList.length > 0 && cityList.push({
          type: letter,
          list: newList
        })
      })
      //  console.log(cityList)
      return cityList
    },
    handleClick (item) {
      // this.$store.state.cityName = item.name
      console.log(item.name, item.cityId)
      this.$store.commit('clearCinema')
      this.$store.commit('changeCityName', item.name)
      this.$store.commit('changeCityId', item.cityId)
      this.$router.back()
    }
  }
}
</script>
<style lang="scss">
.van-toast--html, .van-toast--text {
  min-height: 5rem;
}
.city {
  width: 100%;
  height: 2.75rem;
  background: white;
  display: flex ;
  span {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    width: 72%;
    line-height: 2.75rem;
    height: 2.75rem;
    font-size: 1.0625rem;
  }
  .icon {
    width: 3.2831rem;
    height: 2.75rem;
    line-height: 2.75rem;
    i {
      font-size: 1.1875rem;
      margin-left: .625rem;
    }
  }
}
.hot-city {
  padding: .625rem 1rem;
  background: white;
  .hot-city-title {
    padding-bottom: .625rem;
    color: #797d82;
    font-size: .8125rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    li {
      background: #f4f4f4;
      height: 1.875rem;
      line-height: 1.875rem;
      width: 6.125rem;
      text-align: center;
      margin: 0 .4688rem;
      margin-bottom: .9375rem;
      border-radius: .25rem;
    }
  }
}
</style>
