<template>
  <main class="main">
    <IndexIntro />
    <IndexWorks />
    <IndexOnline />
    <IndexProduction />
    <IndexInsta />
    <IndexReviews />
    <IndexAdvantages />
    <!--  -->
    <div></div>
    <!--  -->
    <IndexAbout />

    <img src="assets/images/second_bg.png" class="main__img-second" />
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
  background-image: url('/assets/images/first_bg.png');//, url('/assets/images/second_bg.png');
  background-repeat: no-repeat;
  background-position: top left;//, center left;
  background-size: rem(612.5) rem(1202.35);//, rem(597) rem(1542);
  position: relative;

  &__img {
    &-second {
      position: absolute;
      width: rem(597);
      height: rem(1542);
      left: 0;
      top: rem(1139)
    }
  }
}
</style>
