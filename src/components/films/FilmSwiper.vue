<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  mounted () {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      autoplay: {
        delay: 2500
      }
    })
  }
}
</script>
