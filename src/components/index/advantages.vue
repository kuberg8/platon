<template>
  <section class="advantages">
    <h1 class="advantages__title">Наши преимущества</h1>
    <div class="advantages__cards">
      <VAdvantagesCard v-for="(card, i) in cards" :key="i" v-bind="card" />
    </div>
  </section>
</template>

<script setup>
import VAdvantagesCard from '../VAdvantagesCard.vue'

const cards = [
  ...new Array(5).fill({
    icon: 'test-icon',
    title: 'Индивидуальный подход',
    text: 'Мы учитываем каждое пожелание клиента и стремимся максимально точно воплотить его в жизнь. Дизайн-проект разрабатывается для конкретного случая. Специалисты учитывают особенности планировки, технические характеристики помещения и предпочтения заказчика.',
  }),
]
</script>

<style lang="scss">
.advantages {
  background: linear-gradient(0deg, #333 0%, rgba(51, 51, 51, 0) 78.58%), url('/assets/images/advantages.png'),
    lightgray 50% / cover no-repeat;
  background-size: cover;
  padding: rem(200) rem(130);
  margin: rem(-200) 0;
  min-height: rem(881);

  &__title {
    text-align: center;
    margin-bottom: rem(52);
  }

  &__cards {
    display: flex;
    column-gap: rem(25);
    justify-content: space-between;
  }
}
</style>
