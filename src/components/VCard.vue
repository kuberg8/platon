<template>
  <div class="card">
    <h2 class="card__title">{{ title }}</h2>

    <div class="card__img-wrapper">
      <VButton text icon="arrow" class="card__arrow-left" @click="prevItem" />
      <img class="card__img" :src="activeItem.img" />
      <VButton text icon="arrow" class="card__arrow-right" @click="nextItem" />
    </div>

    <b class="card__subtitle">{{ activeItem.title }}</b>
    <div>
      <div class="card__unit"><b>Ширина:</b> {{ activeItem.width }} мм</div>
      <div class="card__unit"><b>Высота:</b> {{ activeItem.height }} мм</div>
      <div class="card__unit"><b>Глубина:</b> {{ activeItem.depth }} мм</div>
    </div>
    <div class="card__bottom">
      <b>от {{ priceFilter(activeItem.price) }} руб.</b>
      <a href="#"
        >Рассчитать свой проект
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7.74714" cy="7.88288" r="7.24714" fill="currentColor" fill-opacity="0.52" />
          <path d="M5.81369 4.79883L9.68164 7.88243L5.81369 10.966" stroke="#F2F2F2" stroke-width="1.05332" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed, ref } from 'vue'
import VButton from './VButton.vue'

const props = defineProps({
  title: String,
  items: Array,
})

const activeIndex = ref(0)

const activeItem = computed(() => {
  return props.items[activeIndex.value]
})

const nextItem = () => {
  if (props.items.length - 1 > activeIndex.value) activeIndex.value += 1
  else activeIndex.value = 0
}
const prevItem = () => {
  if (0 < activeIndex.value) activeIndex.value -= 1
  else activeIndex.value = props.items.length - 1
}

const priceFilter = (price) => new Intl.NumberFormat('ru').format(price)
</script>

<style lang="scss">
.card {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: rem(10);
  flex-shrink: 0;
  border-radius: rem(10);
  transition: 0.5s;
  background-color: $color-grey;
  font-size: rem(12);
  
  @include media-breakpoint-up(lg) {
    height: rem(739);
    font-size: rem(18);
    gap: rem(23);
    padding: rem(25) rem(20) rem(5.1) rem(25);

    &:hover {
      box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);

      a {
        color: $color-primary;
      }
    }
  }

  &__img {
    height: rem(200);

    @include media-breakpoint-up(lg) {
      height: rem(362);
    }

    &-wrapper {
      position: relative;
    }
  }

  &__wrapper {
    padding-top: rem(20);
    margin-top: rem(-20);
    padding-bottom: rem(100);

    .swiper-pagination-bullets {
      bottom: 0 !important;
    }
  }

  &__arrow {
    &-right,
    &-left {
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      width: rem(40);
      height: rem(40);

      @include media-breakpoint-up(lg) {
        width: rem(64);
        height: rem(64);
      }
    }

    &-left {
      left: rem(11);

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.9);
      }
    }

    &-right {
      right: rem(11);
      transform: rotate(180deg);

      &:hover {
        transform: rotate(180deg) scale(1.1);
      }

      &:active {
        transform: rotate(180deg) scale(0.9);
      }
    }
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @include media-breakpoint-up(lg) {
      height: rem(70);
    }

    a {
      display: none;

      @include media-breakpoint-up(lg) {
        display: flex;
        align-items: center;
        color: #828282;
        column-gap: rem(10);
        text-decoration: underline;
        transition: color 0.5s;
      }
    }
  }

  &__title {
    font-weight: 600;
    line-height: 100%;
    font-size: rem(23.5);
    letter-spacing: rem(0.824);

    @include media-breakpoint-up(lg) {
      font-size: rem(40);
      letter-spacing: rem(1.4);
    }
  }

  &__subtitle {
    font-size: rem(14);

    @include media-breakpoint-up(lg) {
      font-size: rem(24);
      line-height: 167.9%;
    }
  }

  &__unit {
    height: rem(24);
    
    @include media-breakpoint-up(lg) {
      height: rem(37);
    }
  }
}
</style>
