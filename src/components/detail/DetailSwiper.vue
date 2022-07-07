<template>
  <div class="swiper" :class="name">
    <div class="swiper-wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
export default {
  props: {
    perview: {
      type: Number,
      default: 1
    },
    name: {
      type: String,
      default: 'kerwin'
    }
  },
  mounted () {
    new Swiper('.' + this.name, {
      slidesPerView: this.perview,
      spaceBetween: 30,
      freeMode: true,
      modules: [Navigation]
    })
  }
}
</script>
