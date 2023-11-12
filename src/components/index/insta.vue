<template>
  <section class="insta">
    <div class="insta__container">
      <div class="insta__title">
        Еще больше фото работ вы найдете в&nbsp;нашем <span class="insta__title-color">instagram</span>
      </div>
      <VButton tag="a" :href="contacts.instagram" target="_blank" class="insta__button">Посмотреть instagram</VButton>
    </div>

    <img src="assets/images/phone.png" class="insta__phone" />
    <img src="assets/images/insta.png" class="insta__logo" />
  </section>
</template>

<script setup>
import { inject } from 'vue'
import VButton from '../VButton.vue'

const contacts = inject('contacts')
</script>

<style lang="scss">
.insta {
  display: flex;
  background-color: #333;
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  position: relative;
  padding-bottom: rem(10);

  &__mobile {
    @include media-breakpoint-up(lg) {
      display: none;
    }
  }

  &__desktop {
    display: none;

    @include media-breakpoint-up(lg) {
      display: flex;
    }
  }

  @include media-breakpoint-up(lg) {
    height: rem(279);
    padding-bottom: rem(0);
  }

  &__container {
    display: flex;
    flex-direction: column;
    padding: 0 rem(20);
    z-index: 1;
    width: 100%;

    @include media-breakpoint-up(lg) {
      width: auto;
      padding-left: rem(187);
      padding-right: 0;
    }
  }

  &__title {
    font-weight: 600;
    font-size: rem(20);
    width: rem(208);
    line-height: 107%;
    margin-top: rem(30);
    margin-bottom: rem(30);

    @include media-breakpoint-up(lg) {
      text-align: center;
      line-height: 81%;
      font-size: rem(50);
      letter-spacing: rem(1.75);
      width: rem(847.396);
      height: rem(118.197);
      margin-top: rem(53);
      margin-bottom: rem(13);
    }

    &-color {
      color: $color-primary;
    }
  }

  &__button {
    justify-content: center;
    width: 100%;

    @include media-breakpoint-up(lg) {
      color: #333;
      margin-left: rem(371);
      width: rem(401);
    }
  }

  &__phone {
    position: absolute;
    bottom: 0;
    right: 0;
    width: rem(176);
    height: rem(211);

    @include media-breakpoint-up(lg) {
      width: rem(370);
      height: rem(440);
      left: rem(1117);
    }
  }

  &__logo {
    position: absolute;
    width: rem(140);
    height: rem(140);
    right: rem(-8);
    bottom: rem(0);

    @include media-breakpoint-up(lg) {
      bottom: rem(25);
      left: rem(1292);
      width: rem(250.745);
      height: rem(250.745);
    }
  }
}
</style>
