<template>
  <header class="header">
    <a href="#intro">
      <img class="header__logo" src="@/assets/images/logo.svg" />
    </a>

    <nav>
      <ul class="header__nav">
        <li v-for="(link, i) in links" :key="i">
          <a :href="link.link">
            {{ link.text }}
          </a>
        </li>
      </ul>
    </nav>

    <div class="header__address">
      <div class="header__address-street">
        <VButton text icon="address" class="header__address-icon" />
        г. Гомель, ул. производителей 14
      </div>
      <b class="header__phone">тел. + 375 (29) 127-48-18</b>
      <VButton> Заказать звонок </VButton>
    </div>
    <div class="header__social">
      <VButton text icon="vk" />
      <VButton text icon="insta" />
    </div>
  </header>
</template>

<script setup>
import VButton from '../VButton.vue'

const links = [
  { text: 'Рассчитать стоимость' },
  { text: 'О нас', link: '#about' },
  { text: 'Наши работы', link: '#work' },
  { text: 'Контакты' },
]
</script>

<style lang="scss">
.header {
  @include base-container;

  display: flex;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  background: rgba(51, 51, 51, 0.21);
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  padding-top: rem(14.6);
  padding-bottom: rem(14.6);
  z-index: 100;
  
  @include media-breakpoint-up(lg) {
    position: fixed;
    flex-direction: row;
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
  }

  &__address {
    display: flex;
    align-items: center;
    flex-direction: column;
    column-gap: rem(20);
    font-size: rem(16);
    
    @include media-breakpoint-up(lg) {
      flex-direction: row;
      margin-left: auto;
    }

    &-street {
      display: flex;
      flex-direction: column;
      align-items: center;
      column-gap: rem(10);

      @include media-breakpoint-up(lg) {
        flex-direction: row;
      }
    }

    &-icon {
      width: rem(30);
      height: rem(30);
    }
  }

  &__phone {
    font-size: rem(16);
  }
}
</style>
