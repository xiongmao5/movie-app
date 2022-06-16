<template>
  <div>
    <film-swiper :key="datalist.length">
      <film-swiper-item v-for="data of datalist" :key="data.id" class="filmswiperitem">
        <img :src="data.imgUrl" />
      </film-swiper-item>

    </film-swiper>
    <div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import filmSwiper from '../components/films/FilmSwiper.vue'
import filmSwiperItem from '../components/films/FilmSwiperItem.vue'
import axios from 'axios'
export default {
  data () {
    return {
      datalist: []
    }
  },
  mounted () {
    axios.get('/banner.json').then(res => {
      this.datalist = res.data.banner
    })
  },
  components: {
    filmSwiper,
    filmSwiperItem
  }
}
</script>

<style lang="scss" scoped>
  .filmswiperitem {
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>
