<template>
  <swiper
    :slides-per-view="slidesPerView"
    :space-between="spaceBetween"
    navigation
    :pagination="{ clickable: true }"
    :class="wrapperClass"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(slide, i) in items" :key="i" :class="slideClass">
      <slot :item="slide" :index="i" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    slideClass: {
      type: String,
      default: '',
    },
    wrapperClass: {
      type: String,
      default: '',
    },
    slidesPerView: {
      type: Number,
      default: 3.1
    },
    spaceBetween: {
      type: Number,
      default: 50
    }
  },
  methods: {
    onSwiper() {
      // console.log(swiper)
    },
    onSlideChange() {
      // this.$emit('slideChange', realIndex)
    },
  },
}
</script>

<style lang="scss"></style>
