<template>
  <section class="advantages">
    <h1 class="advantages__title">Наши преимущества</h1>
    <VSwiper :items="cards" :breakpoints="breakpoints" :slidesPerView="1.1" wrapperClass="advantages__swiper">
      <template #default="{ item }">
        <VAdvantagesCard v-bind="item" />
      </template>
    </VSwiper>
  </section>
</template>

<script setup>
import VAdvantagesCard from '../VAdvantagesCard.vue'
import VSwiper from '../VSwiper.vue'

const cards = [
  ...new Array(5).fill({
    icon: 'test-icon',
    title: 'Индивидуальный подход',
    text: 'Мы учитываем каждое пожелание клиента и стремимся максимально точно воплотить его в жизнь. Дизайн-проект разрабатывается для конкретного случая. Специалисты учитывают особенности планировки, технические характеристики помещения и предпочтения заказчика.',
  }),
]

const breakpoints = {
  1280: {
    slidesPerView: 5
  },
}
</script>

<style lang="scss">
.advantages {
  background: linear-gradient(0deg, #333 0%, rgba(51, 51, 51, 0) 78.58%), url('/assets/images/advantages.png'),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  margin: rem(-200) 0;
  min-height: rem(881);

  &__title {
    text-align: center;
    margin-bottom: rem(52);
  }

  &__swiper {
    @include media-breakpoint-up(lg) {
      padding: rem(200) rem(130);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  .swiper-pagination {
    display: none;
  }
}
</style>
