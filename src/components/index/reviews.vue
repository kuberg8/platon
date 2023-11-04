<template>
  <section id="reviews" class="reviews">
    <div class="reviews__left">Отзывы наших клиентов</div>
    <div class="reviews__right">
      <VSwiper
        ref="swiper"
        :items="reviews"
        :slidesPerView="1"
        :spaceBetween="0"
        class="reviews__right-swiper"
        loop
        autoplay
        @slideChange="changeSlide"
      >
        <template #default="{ item }">
          <div class="reviews__content">
            <VButton class="reviews__content-icon" icon="dote" text />
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
import VButton from '../VButton.vue'
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

const changeSlide = ({ realIndex }) => (activeSlide.value = realIndex + 1)
</script>

<style lang="scss">
.reviews {
  display: grid;
  grid-template-columns: 1fr;
  height: rem(279);
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  z-index: 1;
  max-width: 100vw;
  overflow: hidden;

  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &__left {
    font-weight: 600;
    letter-spacing: rem(1.75);

    @include media-breakpoint-up(lg) {
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
      @include media-breakpoint-up(lg) {
        height: rem(195);
      }
    }
  }

  &__content {
    display: flex;
    align-items: flex-start;
    column-gap: rem(39);
    height: 100%;
    font-size: rem(18);
    font-weight: 400;
    line-height: 202.9%;
    max-width: 100vw;

    @include media-breakpoint-up(lg) {
      padding: 0 rem(103);
    }

    &-icon {
      width: rem(27);
      height: rem(41);
      margin-top: rem(10);
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
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
    text-align: right;
  }

  .swiper-pagination {
    display: none;
  }
}
</style>
