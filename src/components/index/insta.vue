<template>
  <section class="insta">
    <div class="insta__container">
      <div class="insta__title">
        Еще больше фото работ вы найдете в нашем <span class="insta__title-color">instagram</span>
      </div>
      <VButton class="insta__button">Посмотреть instagram</VButton>
    </div>

    <img src="assets/images/phone.png" class="insta__phone" />
    <img src="assets/images/insta.png" class="insta__logo" />
  </section>
</template>

<script setup>
import VButton from '../VButton.vue'
</script>

<style lang="scss">
.insta {
  display: flex;
  height: rem(279);
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  position: relative;

  &__container {
    display: flex;
    flex-direction: column;
    padding: 0 rem(20);

    @include media-breakpoint-up(lg) {
      padding-left: rem(187);
      padding-right: 0;
    }
  }

  &__title {
    text-align: center;
    font-size: rem(50);
    font-weight: 600;
    line-height: 81%;

    @include media-breakpoint-up(lg) {
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
    height: rem(45);
    color: #333;
    justify-content: center;
    width: 100%;

    @include media-breakpoint-up(lg) {
      margin-left: rem(371);
      width: rem(401);
    }
  }

  &__phone {
    position: absolute;
    bottom: 0;

    @include media-breakpoint-up(lg) {
      width: rem(370);
      height: rem(440);
      left: rem(1117);
    }
  }

  &__logo {
    position: absolute;

    @include media-breakpoint-up(lg) {
      bottom: rem(25);
      left: rem(1292);
      width: rem(250.745);
      height: rem(250.745);
    }
  }
}
</style>
