<template>
  <footer id="contacts" class="footer">
    <div v-if="contacts" class="footer__first">
      <img class="footer__logo" src="@/assets/images/logo.svg" />
      <div v-if="contacts.address" class="footer__number">{{ contacts.phone }}</div>
      <div class="footer__mobile-title">Контактная информация</div>
      <div class="footer__mobile">
        <div class="footer__mobile-label">Телефон:</div>
        <a :href="`tel:${contacts.phone}`">{{ contacts.phone }}</a>
      </div>
      <div v-if="contacts.address">
        <VButton @click="$emit('showDialog')" class="footer__button">Заказать звонок</VButton>
      </div>
      <div class="footer__mobile">
        <div class="footer__mobile-label">Эл. почта:</div>
        <a :href="`mailto:${contacts.email}`">{{ contacts.email }}</a>
      </div>
      <div v-if="contacts.address" class="footer__mobile">
        <div class="footer__mobile-label">Адрес:</div>
        <div>{{ contacts.address }}</div>
      </div>
      <div>Платон © 2023</div>
    </div>

    <div class="footer__links">
      <a
        :class="{ link__row: !contacts.address }"
        class="link"
        v-for="(link, i) in links"
        :key="i"
        @click="link.event"
        :href="link.link"
        >{{ link.text }}</a
      >
    </div>

    <div v-if="contacts && contacts.address" class="footer__address">
      <b>Как нас найти</b>
      <div v-if="contacts.map" class="footer__map" v-html="contacts.map" />

      <div class="footer__address-street">
        <VButton text icon="address" />
        {{ contacts.address }}
      </div>
    </div>

    <div v-if="contacts" class="footer__icons" :class="{ 'footer__icons-mobile': !contacts.address }">
      <VButton
        v-if="contacts.vk"
        tag="a"
        :href="contacts.vk"
        target="_blank"
        circle
        icon="vk-large"
        class="footer__icons-item"
      />
      <VButton
        v-if="contacts.instagram"
        tag="a"
        :href="contacts.instagram"
        target="_blank"
        circle
        icon="insta-large"
        class="footer__icons-item"
      />
    </div>

    <div v-if="!contacts.address" class="footer__icons" :class="{ 'footer__icons-desktop': !contacts.address }">
      <a :href="`tel:${contacts.phone}`" class="footer__number">{{ contacts.phone }} </a>
      <div class="footer__icons-row">
        <VButton @click="$emit('showDialog')" class="footer__button">Заказать звонок</VButton>
        <VButton
          tag="a"
          :href="contacts.instagram"
          target="_blank"
          circle
          icon="insta-large"
          class="footer__icons-item"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'
import VButton from '@/components/VButton.vue'

defineProps({
  links: Array,
  contacts: Object,
})
</script>

<style lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  background: $color-bg;
  padding: rem(20) rem(15);
  position: relative;

  @include media-breakpoint-up(lg) {
    border-top: 1px dashed $color-primary;
    flex-direction: row;
    padding: rem(60.21) rem(130) rem(35.21);
  }

  &__first {
    display: flex;
    flex-direction: column;
    row-gap: rem(20);

    @include media-breakpoint-up(lg) {
      row-gap: rem(10);
    }
  }

  &__links {
    display: none;

    @include media-breakpoint-up(lg) {
      width: 100%;
      display: flex;
      margin: 0 rem(167);
      justify-content: space-between;
      font-weight: 700;
      flex-wrap: wrap;
      white-space: nowrap;
    }

    .link {
      min-width: rem(179);

      &__row {
        min-width: auto;
      }
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
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      font-weight: 600;
      white-space: nowrap;
      line-height: 202.9%;
      font-size: rem(34);
    }
  }

  &__address {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      width: 100%;
      height: 100%;
      margin-right: rem(40);
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

    @include media-breakpoint-up(lg) {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: rem(240);
      min-width: rem(746);
      overflow: hidden;
      margin: rem(10) 0;
    }
  }

  &__icons {
    display: flex;
    flex-direction: column;
    row-gap: rem(20);
    position: absolute;
    top: rem(133);
    right: rem(35);
    margin-left: auto;

    @include media-breakpoint-up(lg) {
      position: static;
      margin-top: rem(40);

      &.mt-0 {
        margin-top: 0;
      }
    }

    &-mobile {
      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    &-desktop {
      display: none;

      @include media-breakpoint-up(lg) {
        display: block;
        margin-top: 0;
        min-width: rem(337);
      }
    }

    &-row {
      display: flex;
      column-gap: rem(20);
      align-items: center;
    }
  }

  &__button {
    width: rem(176);
    height: rem(36);

    @include media-breakpoint-up(lg) {
      width: auto;
    }
  }

  &__mobile {
    display: flex;
    flex-direction: column;
    font-weight: 700;
    line-height: 150%;
    font-size: rem(14);

    &-label {
      font-size: rem(14);
      line-height: 140%;
      font-weight: 400;
      color: #828282;
    }

    &-title {
      font-size: rem(16);
      font-weight: 500;
      line-height: 140%;

      @include media-breakpoint-up(lg) {
        display: none;
      }
    }

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }
}
</style>
