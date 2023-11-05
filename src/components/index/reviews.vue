<template>
  <section id="reviews" class="reviews">
    <div class="reviews__left">Отзывы наших клиентов</div>
    <div class="reviews__right">
      <VSwiper
        ref="swiper"
        :items="reviews"
        :breakpoints="breakpoints"
        :slidesPerView="1.2"
        :spaceBetween="10"
        class="reviews__right-swiper"
        autoplay
        loop
        @slideChange="changeSlide"
      >
        <template #default="{ item }">
          <div class="reviews__content">
            <svg
              class="reviews__content-icon"
              width="22"
              height="13"
              viewBox="0 0 22 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.4 12.5766H0.5L5.6 0.22656H10.2L7.4 12.5766ZM18.45 12.5766H11.55L16.7 0.22656H21.25L18.45 12.5766Z"
                fill="#F2F2F2"
              />
            </svg>

            <div class="reviews__text">
              {{ item.text }}
              <div class="reviews__row">
                <img class="reviews__user" src="assets/images/user.png" />
                {{ item.user }}
              </div>
            </div>
          </div>
        </template>
      </VSwiper>

      <div class="reviews__count">{{ activeSlide }}/{{ reviews.length }}</div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import VSwiper from '../VSwiper.vue'

const activeSlide = ref(0)

const reviews = [
  {
    text: 'Сотрудничество с woodland оставило хорошие впечатления, особенно хочется отметить работу монтажников. Сделали все быстро и аккуратно. Рекомендую.',
    user: 'Иван Харламов',
  },
  {
    text: 'Сотрудничество с woodland оставило хорошие впечатления, особенно хочется отметить работу монтажников. Сделали все быстро и аккуратно. Рекомендую.',
    user: 'Иван Харламов',
  },
]

const breakpoints = {
  1280: {
    slidesPerView: 1,
    spaceBetween: 0,
  },
}

const changeSlide = ({ realIndex }) => (activeSlide.value = realIndex + 1)
</script>

<style lang="scss">
.reviews {
  display: grid;
  grid-template-columns: 1fr;
  z-index: 1;
  max-width: 100vw;
  overflow: hidden;

  @include media-breakpoint-up(lg) {
    box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
    height: rem(279);
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &__left {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      text-align: left;
      line-height: 81%;
      background: url('/assets/images/reviews.svg');
      font-size: rem(50);
      padding: rem(92) rem(187.7) 0 rem(252);
      background-repeat: no-repeat;
      background-size: 121%;
      background-position: left center;
    }
  }

  &__right {
    height: 100%;

    @include media-breakpoint-up(lg) {
      padding: rem(42) rem(68) rem(10) rem(26.3);
    }

    &-swiper {
      max-width: 100vw;
      padding: 0 rem(15) rem(45);

      @include media-breakpoint-up(lg) {
        padding: 0;
        height: rem(195);
      }
    }
  }

  &__content {
    display: grid;
    grid-template-columns: rem(27) auto;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    font-size: rem(18);
    font-weight: 400;
    line-height: 202.9%;
    max-width: 100vw;
    column-gap: rem(6);
    min-height: rem(200);
    padding: rem(10);

    border-radius: 10px;
    background: rgba(51, 51, 51, 0.8);
    backdrop-filter: blur(5px);

    @include media-breakpoint-up(lg) {
      padding: 0;
      display: flex;
      min-height: auto;
      column-gap: rem(39);
      padding: 0 rem(103);
      background: none;
      backdrop-filter: none;
    }

    &-icon img {
      height: rem(23);
      width: rem(27);
      margin-top: rem(10);

      @include media-breakpoint-up(lg) {
        height: rem(41);
      }
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-size: rem(16);
    line-height: rem(20);

    @include media-breakpoint-up(lg) {
      font-size: rem(18);
      line-height: 202%;
    }
  }

  &__row {
    display: flex;
    align-items: center;
    column-gap: rem(19);
  }

  &__user {
    width: rem(40);
    height: rem(40);
  }

  &__count {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      text-align: right;
    }
  }

  @include media-breakpoint-up(lg) {
    .swiper-pagination {
      display: none;
    }
  }
}
</style>
