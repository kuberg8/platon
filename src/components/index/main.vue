<template>
  <main class="main">
    <IndexIntro />
    <IndexWorks />
    <IndexOnline class="online__desktop" />
    <IndexInsta class="insta__mobile" />
    <IndexProduction />
    <IndexInsta class="insta__desktop" />
    <IndexReviews />
    <IndexOnline class="online__mobile" />
    <IndexAdvantages />
    <IndexMaterials />
    <IndexAsks />
    <IndexAbout />

    <img src="assets/images/first_bg.png" class="main__img-first" />
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
import IndexMaterials from '@/components/index/materials.vue'
import IndexAsks from '@/components/index/asks.vue'
import IndexAdvantages from '@/components/index/advantages.vue'
</script>

<style lang="scss">
.main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  row-gap: rem(50);

  @include media-breakpoint-up(lg) {
    row-gap: rem(200);
  }

  &__img {
    &-first {
      display: block;
      position: absolute;
      left: rem(-90);
      top: rem(-510);
      object-fit: contain;
      z-index: -1;
      width: rem(222.5);

      @include media-breakpoint-up(lg) {
        top: 0;
        left: 0;
        width: rem(462.5);
      }
    }

    &-second {
      top: rem(2045);
      left: rem(-100);
      display: block;
      position: absolute;
      z-index: -1;

      @include media-breakpoint-up(lg) {
        top: rem(1189);
        left: auto;
        width: rem(597);
        height: rem(1542);
      }
    }

    &-third {
      display: none;
      position: absolute;
      right: 0;
      width: rem(624.799);
      height: rem(416.583);
      top: rem(800);
      z-index: -1;

      @include media-breakpoint-up(lg) {
        display: block;
      }
    }
  }
}
</style>
