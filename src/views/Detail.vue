<template>
  <div v-if="filmInfo" class="background">
    <transition>
      <detail-header v-scroll="50">
          {{ filmInfo.name }}
      </detail-header>
    </transition>
    <div class="poster">
      <img :src="filmInfo.poster">
      <i class="iconfont" @click="handleBack">&#xe659;</i>
    </div>
    <div class="content">
      <div>
        <span class="item-name">{{ filmInfo.name }}</span>
        <span class="item-list-item">{{ filmInfo.filmType.name }}</span>
        <div class="score" v-show="filmInfo.grade">
          <i class="grade">{{ filmInfo.grade }}</i>
          <span class="grade-item">分</span>
        </div>
      </div>
      <div class="content-list">{{ filmInfo.category }}</div>
      <div class="content-list">{{ filmInfo.premiereAt | dateFilter }}上映</div>
      <div class="content-list">{{ filmInfo.nation }} | {{ filmInfo.runtime }}分钟</div>
      <div class="content-item" :class="isHidden?'hidden':''">{{ filmInfo.synopsis }}</div>
      <div class="content-icon">
        <i class="iconfont" @click="isHidden=!isHidden" v-if="isHidden">&#xe62f;</i>
        <i class="iconfont" @click="isHidden=!isHidden" v-if="!isHidden">&#xe62d;</i>
      </div>
    </div>
    <div class="actor">
      <div class="actor-title">演职人员</div>
      <detail-swiper :perview="4" name="actors">
        <detail-swiper-item v-for="(data, index) of filmInfo.actors" :key="index" >
          <div class="swiper-picture">
            <img :src="data.avatarAddress">
          </div>
          <div class="swiper-name">{{ data.name }}</div>
          <div class="swiper-post">{{ data.role }}</div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
    <div class="actor">
      <div class="actor-title">剧照</div>
      <detail-swiper :perview="2.3" name="picture">
        <detail-swiper-item v-for="(data, index) of filmInfo.photos" :key="index" >
          <div class="swiper-still" @click="handlePreview(index)">
              <img :src="data">
          </div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
    <div class="shop" v-show="filmInfo.isSale">选座购票</div>
  </div>
</template>
<script>
import http from '@/util/http'
import moment from 'moment'
import Vue from 'vue'
import detailSwiper from '@/components/detail/DetailSwiper.vue'
import detailHeader from '@/components/detail/DetailHeader.vue'
import detailSwiperItem from '@/components/detail/DetailSwiperItem.vue'
import { ImagePreview } from 'vant'
import obj from '@/util/mixinObj'

Vue.filter('dateFilter', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
Vue.directive('scroll', {
  inserted (el, binding) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default {
  mixins: [obj],
  data () {
    return {
      filmInfo: null,
      isHidden: true
    }
  },
  methods: {
    handleBack () {
      this.$router.back()
    },
    handlePreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index,
        closeable: true,
        closeIconPosition: 'top-left'
      })
    }
  },
  components: {
    detailSwiper,
    detailSwiperItem,
    detailHeader
  },
  mounted () {
    // console.log('created', this.$route.params.id)
    http({
      url: `/gateway?filmId=${this.$route.params.id}&k=9103380`,
      headers: {
        // 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16549331621220685540098049"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      // console.log(res.data)
      const { film } = res.data.data
      this.filmInfo = {
        ...film,
        category: film.category.split('|').join(' | ')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .poster {
    width: 100%;
    height: 13.1312rem;
    overflow: hidden;
    position: relative;
    i {
      background: rgba(255, 255, 255, .5);
      font-size: 1.25rem;
      position: absolute;
      left: .375rem;
      top: .375rem;
      color: black;
      border-radius: 50%;
      padding: .25rem;
    }
    img {
      max-width: 100%;
      text-align: center;;
      position:relative;
      bottom: 80%;
    }
  }
  .item-list-item {
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    color: white;
    width: 1.2619rem;
    height: .875rem;
    background: rgb(210, 214, 220);
    padding: 0 .125rem;
    font-size: .75rem;
    border-radius: .125rem;
    line-height: .87rem;
  }
  .score{
    float: right;
  }
  .grade {
    color: rgb(255, 178, 50);
    font-size: 1.125rem;
  }
  .grade-item {
    color: rgb(255, 178, 50);
    font-size: .75rem;
  }
  .item-name {
    color: rgb(25, 26, 27);
    font-size: 1.125rem;
    height: 1.5rem;
    line-height: 1.5rem;
    margin-right: .4375rem;
    vertical-align: middle;
  }
  .content {
    padding: .75rem .9375rem;
    background: white;
  }
  .content-list {
    font-size: .8125rem;
    height: 1.2188rem;
    line-height: 1.2188rem;
    color: rgb(121, 125, 130);
    margin-top: .25rem;
  }
  .content-item {
    font-size: .8125rem;
    line-height: 1.2188rem;
    color: rgb(121, 125, 130);
    margin-top: .75rem;
  }
  .hidden {
    overflow: hidden;
    height: 2.4rem;
  }
  .content-icon {
    text-align: center;
  }
  .iconfont {
    font-size: .75rem;
    color: rgba(121, 125, 130, .5);
  }
  .swiper-picture {
    width: 5.3125rem;
    height: 5.3125rem;
    overflow: hidden;
    img {
      max-width: 100%;
      text-align: center;;
      position:relative;
      bottom: 10%;
    }
  }
  .actor {
    margin-top: .625rem;
    padding: .75rem .9375rem;
    background: white;
  }
  .swiper-name {
    font-size: .75rem;
    padding-top: .625rem;
    text-align: center;
    height: 1.125rem;
    line-height: 1.125rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 5.3125rem;
  }
  .swiper-post {
    color: rgb(121, 125, 130);
    font-size: .75rem;
    line-height: 1.125rem;
    text-align: center;
    width: 5.3125rem;
  }
  .swiper-still {
    width: 100%;
    height: 9.375rem;
    vertical-align: middle;
      img {
        position:relative;
        bottom: 10%;
        text-align: center;
        object-fit: cover;
        width: 9.375rem;
        height: 6.25rem
    }
  }
  .shop {
    width: 100%;
    height: 3.125rem;
    color: white;
    background: rgb(255, 95, 22);
    text-align: center;
    font-size: 1rem;
    line-height: 3.125rem;
    position: fixed;
    bottom: -0.1875rem;
    z-index: 100000;
  }
  .actor-title {
    padding-bottom: .9375rem;
  }
</style>
