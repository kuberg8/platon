<template>
  <header class="header">
    <a :href="`tel:${contacts.phone}`" class="header__mobile">
      <VButton text icon="phone" class="header__phone-icon" />
      {{ contacts.phone }}
    </a>

    <a href="#intro">
      <picture>
        <source class="header__logo" srcset="@/assets/images/logo-mobile.svg" media="(max-width: 1280px)" />
        <img class="header__logo" src="@/assets/images/logo.svg" />
      </picture>
    </a>

    <nav>
      <ul class="header__nav">
        <li v-for="(link, i) in links" :key="i">
          <a class="link" :href="link.link" @click="link.event">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>

    <div v-if="contacts" class="header__address">
      <div v-if="contacts.address" class="header__address-street">
        <VButton text icon="address" class="header__address-icon" />
        {{ contacts.address }}
      </div>
      <a :href="`tel:${contacts.phone}`" v-if="contacts.phone" class="header__phone">тел. {{ contacts.phone }}</a>
      <div class="header__title">Мы&nbsp;производим мебель из массива</div>
      <VButton @click="$emit('showDialog')" class="header__button"> Заказать звонок </VButton>
    </div>
    <div v-if="contacts" class="header__social">
      <VButton v-if="contacts.vk" text icon="vk" tag="a" :href="contacts.vk" target="_blank" />
      <VButton v-if="contacts.instagram" text icon="insta" tag="a" :href="contacts.instagram" target="_blank" />
    </div>
  </header>
</template>

<script setup>
import { defineProps } from 'vue'
import VButton from '../VButton.vue'

defineProps({
  links: Array,
  contacts: Object,
})
</script>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.21);
  backdrop-filter: blur(10px);
  z-index: 100;
  row-gap: rem(20);
  margin: 0 rem(15);
  padding: rem(5) 0 0;

  @include media-breakpoint-up(lg) {
    box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.06);
    width: 100%;
    position: fixed;
    flex-direction: row;
    padding: rem(14.6) rem(100);
    margin: 0;
  }

  &__logo {
    height: rem(153);
    width: rem(157);

    @include media-breakpoint-up(lg) {
      height: rem(71);
      width: rem(163);
    }
  }

  &__nav {
    display: flex;
    column-gap: rem(35);
    row-gap: rem(20);

    @include media-breakpoint-up(lg) {
      margin-left: rem(74.78);
    }
  }

  &__social {
    display: none;
    align-items: center;
    column-gap: rem(10);
    margin-left: rem(16.6);

    @include media-breakpoint-up(lg) {
      display: flex;
    }
  }

  nav {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
    }

    .link:hover {
      text-decoration: underline;
    }
  }

  &__address {
    display: flex;
    align-items: center;
    flex-direction: column;
    column-gap: rem(20);
    row-gap: rem(20);
    font-size: rem(16);
    width: 100%;

    @include media-breakpoint-up(lg) {
      flex-direction: row;
      margin-left: auto;
      width: auto;
    }

    &-street {
      display: flex;
      align-items: center;
      column-gap: rem(10);
      font-size: rem(16);
    }

    &-icon {
      width: rem(30);
      height: rem(30);
    }
  }

  &__phone {
    display: none;
    font-size: rem(16);

    @include media-breakpoint-up(lg) {
      display: block;
      font-weight: bold;
    }
  }

  &__button {
    width: 100%;
    height: rem(45);

    @include media-breakpoint-up(lg) {
      width: auto;
      height: rem(36);
    }
  }

  &__mobile {
    display: flex;
    align-items: center;
    column-gap: rem(8);
    margin-bottom: rem(5);
    font-size: rem(20);
    font-weight: 700;

    @include media-breakpoint-up(lg) {
      display: none;
    }

    .btn {
      width: rem(50) !important;
      height: rem(50) !important;
    }
  }

  &__title {
    font-size: rem(36);
    font-weight: 800;
    line-height: 107.5%;
    text-align: center;
    letter-spacing: rem(1.4);

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }
}
</style>
