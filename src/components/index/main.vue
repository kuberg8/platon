<template>
  <main class="main">
    <IndexIntro />
    <IndexWorks />
    <IndexOnline />
    <IndexProduction />
    <IndexInsta />
    <IndexReviews />
    <IndexAdvantages />
    <IndexAbout />

    <img src="assets/images/second_bg.png" class="main__img-second" />
    <img src="assets/images/three.png" class="main__img-third" />
  </main>
</template>

<script setup>
import IndexIntro from '@/components/index/intro.vue'
import IndexWorks from '@/components/index/works.vue'
import IndexOnline from '@/components/index/online.vue'
import IndexAbout from '@/components/index/about.vue'
import IndexProduction from '@/components/index/production.vue'
import IndexInsta from '@/components/index/insta.vue'
import IndexReviews from '@/components/index/reviews.vue'
import IndexAdvantages from '@/components/index/advantages.vue'
</script>

<style lang="scss">
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  row-gap: rem(200);
  position: relative;
  
  @include media-breakpoint-up(lg) {
    background-image: url('/assets/images/first_bg.png');
    background-repeat: no-repeat;
    background-position: top left;
    background-size: rem(612.5) rem(1202.35);
  }

  &__img {
    &-second {
      display: none;
      position: absolute;
      width: rem(597);
      height: rem(1542);
      left: 0;
      top: rem(1139);
      z-index: -1;

      @include media-breakpoint-up(lg) {
        display: block;
      }
    }

    &-third {
      display: none;
      position: absolute;
      right: 0;
      width: rem(624.799);
      height: rem(416.583);
      top: rem(771);
      z-index: -1;

      @include media-breakpoint-up(lg) {
        display: block;
      }
    }
  }
}
</style>
