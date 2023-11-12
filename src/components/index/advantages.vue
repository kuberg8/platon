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
  {
    icon: '1',
    title: 'Индивидуальный подход',
    text: 'Мы учитываем каждое пожелание клиента и стремимся максимально точно воплотить его в жизнь. Дизайн-проект разрабатывается для конкретного случая. Специалисты учитывают особенности планировки, технические характеристики помещения и предпочтения заказчика.',
  },
  {
    icon: '2',
    title: 'Качество',
    text: 'Решения отличаются надежностью, комфортом и долговечностью. Технические возможности позволяют нам создавать изделия премиум-класса.',
  },
  {
    icon: '3',
    title: 'Нам доверяют',
    text: 'Присутствуем на рынке более 15 лет. Отмечены в рейтинге "10 лучших мебельных фабрик Москвы и Подмосковья".',
  },
  {
    icon: '4',
    title: 'Доступность',
    text: 'Стоимость остается невысокой за счет отсутствия посредников. Клиенту не приходится переплачивать за это.',
  },
  {
    icon: '5',
    title: 'Гарантии',
    text: 'Которые распространяются на весь ассортимент продукции.',
  },
]

const breakpoints = {
  1280: {
    slidesPerView: 5,
  },
}
</script>

<style lang="scss">
.advantages {
  background: linear-gradient(0deg, #333 0%, rgba(51, 51, 51, 0) 78.58%), url('/assets/images/advantages-mobile.png'),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  padding: rem(38) 0;
  min-height: rem(554);

  @include media-breakpoint-up(lg) {
    background: linear-gradient(0deg, #333 0%, rgba(51, 51, 51, 0) 78.58%), url('/assets/images/advantages.png'),
      lightgray 50% / cover no-repeat;
    background-size: cover;
    min-height: rem(881);
    margin: rem(-200) 0;
    padding: rem(200) 0;
  }

  &__title {
    text-align: center;
    margin-bottom: rem(30);

    @include media-breakpoint-up(lg) {
      margin-bottom: rem(52);
    }
  }

  &__swiper {
    padding: 0 rem(20) rem(60);

    @include media-breakpoint-up(lg) {
      padding: 0 rem(130);
    }
  }

  @include media-breakpoint-up(lg) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none;
    }

    .swiper-pagination {
      display: none;
    }
  }
}
</style>
