<template>
  <section id="work">
    <VSwiper :items="[...new Array(9).fill(testCard)]" wrapper-class="card__wrapper" class="work container">
      <template #default="{ item }">
        <VCard v-bind="item" />
      </template>
    </VSwiper>
  </section>
</template>

<script setup>
import VSwiper from '../VSwiper.vue'
import VCard from '../VCard.vue'

const testCard = {
  title: 'Спальни',
  items: [
    {
      title: 'Кровать для спальни модель 4.11',
      width: 1400,
      height: 800,
      depth: 2200,
      price: 135000,
      img: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D',
    },
    {
      title: 'Кровать для спальни модель 4.11',
      width: 200,
      height: 100,
      depth: 200,
      price: 35000,
      img: 'https://img.freepik.com/free-photo/a-cupcake-with-a-strawberry-on-top-and-a-strawberry-on-the-top_1340-35087.jpg',
    },
  ],
}
</script>

<style lang="scss">
.work {
  height: rem(829);
  //   background-image: url('/assets/images/second_bg.png');
  //   background-size: rem(597) rem(1542);
  //   background-position: top left;
  //   background-repeat: no-repeat;

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
}
</style>
