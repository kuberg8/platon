<template>
  <footer class="footer">
    <div class="footer__first">
      <img class="footer__logo" src="@/assets/images/logo.svg" />
      <div class="footer__number">+ 375 (29) 127-48-18</div>
      <div>
        <VButton>Заказать звонок</VButton>
      </div>
      <div>Платон © 2023</div>
    </div>

    <div class="footer__links">
      <a v-for="(link, i) in links" :key="i" :href="link.link">{{ link.text }}</a>
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
      <VButton circle icon="vk-large" />
      <VButton circle icon="insta-large" />
    </div>
  </footer>
</template>

<script setup>
import VButton from '@/components/VButton.vue'

const links = [
  { text: 'Рассчитать стоимость' },
  { text: 'О нас', link: '#about' },
  { text: 'Наши работы', link: '#work' },
  { text: 'Отзывы', link: '#reviews' },
  { text: 'Контакты' },
]
</script>

<style lang="scss">
.footer {
  @include base-container;

  display: flex;
  column-gap: rem(167);
  background: $color-bg;
  border-top: 1px dashed $color-primary;

  @include media-breakpoint-up(lg) {
    padding: rem(77.21) rem(130) rem(35.21);
  }

  &__first {
    display: flex;
    flex-direction: column;
    row-gap: rem(10);
  }

  &__links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: 700;
    width: rem(179);
    white-space: nowrap;
  }

  &__logo {
    height: rem(150);
    width: rem(337);
  }

  &__number {
    font-size: rem(34);
    font-weight: 600;
    line-height: 202.9%;
    white-space: nowrap;
  }

  &__address {
    width: rem(589);
    height: 100%;

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
    height: rem(219);
    overflow: hidden;
    margin: rem(10) 0;
  }

  &__icons {
    display: flex;
    flex-direction: column;
    row-gap: rem(20);
    margin-top: rem(40);
  }
}
</style>
