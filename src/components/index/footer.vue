<template>
  <footer id="contacts" class="footer">
    <div class="footer__first">
      <img class="footer__logo" src="@/assets/images/logo.svg" />
      <div class="footer__number">+ 375 (29) 127-48-18</div>
      <div>
        <VButton class="footer__button">Заказать звонок</VButton>
      </div>
      <div>Платон © 2023</div>
    </div>

    <div class="footer__links">
      <a class="link" v-for="(link, i) in links" :key="i" @click="link.event" :href="link.link">{{ link.text }}</a>
    </div>

    <div class="footer__address">
      <b>Как нас найти</b>
      <div class="footer__map">
        <img src="assets/images/map.jpg" />
      </div>

      <div class="footer__address-street">
        <VButton text icon="address" />
        г. Гомель, ул. производителей 14
      </div>
    </div>

    <div class="footer__icons">
      <VButton circle icon="vk-large" class="footer__icons-item" />
      <VButton circle icon="insta-large" class="footer__icons-item" />
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'
import VButton from '@/components/VButton.vue'

defineProps({
  links: Array,
})
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  column-gap: rem(167);
  background: $color-bg;
  padding: rem(20) rem(15);
  position: relative;

  @include media-breakpoint-up(lg) {
    border-top: 1px dashed $color-primary;
    flex-direction: row;
    padding: rem(77.21) rem(130) rem(35.21);
  }

  &__first {
    display: flex;
    flex-direction: column;
    row-gap: rem(10);
  }

  &__links {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 700;
    white-space: nowrap;

    @include media-breakpoint-up(lg) {
      width: rem(179);
      display: flex;
    }
  }

  &__logo {
    height: rem(71);
    width: rem(159);

    @include media-breakpoint-up(lg) {
      height: rem(150);
      width: rem(337);
    }
  }

  &__number {
    font-weight: 600;
    white-space: nowrap;
    font-size: rem(14);
    line-height: 140%;

    @include media-breakpoint-up(lg) {
      line-height: 202.9%;
      font-size: rem(34);
    }
  }

  &__address {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      width: rem(589);
      height: 100%;
    }

    &-street {
      display: flex;
      align-items: center;
      column-gap: rem(10);
      font-size: rem(16);

      img {
        width: rem(30);
        height: rem(30);
      }
    }
  }

  &__map {
    display: none;
    height: rem(219);
    overflow: hidden;
    margin: rem(10) 0;

    @include media-breakpoint-up(lg) {
      display: block;
    }
  }

  &__icons {
    display: flex;
    flex-direction: column;
    row-gap: rem(20);
    position: absolute;
    top: rem(133);
    right: rem(35);

    @include media-breakpoint-up(lg) {
      position: static;
      display: block;
      margin-top: rem(40);
    }
  }

  &__button {
    width: rem(176);
    height: rem(26);

    @include media-breakpoint-up(lg) {
      width: auto;
      height: rem(36);
    }
  }
}
</style>
