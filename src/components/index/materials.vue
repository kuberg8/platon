<template>
  <section class="materials">
    <h1>Используемые материалы</h1>
    <div class="materials__row">
      <VMaterialsCard v-for="(card, i) in cards" :key="i" v-bind="card" />
    </div>
  </section>
</template>

<script setup>
import VMaterialsCard from '../VMaterialsCard.vue'

const cards = [
  ...new Array(12).fill({
    title: 'Дуб',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKUpf34vB6N_erMqK2DBRG0IjVEw_M6eSSQ&usqp=CAU',
  }),
]
</script>

<style lang="scss">
.materials {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  row-gap: rem(50);

  @include media-breakpoint-up(lg) {
    row-gap: 0;
  }

  &__row {
    display: grid;
    column-gap: rem(20);
    grid-template-columns: repeat(3, 1fr);
    row-gap: rem(30);
    
    @include media-breakpoint-up(lg) {
        padding: rem(80);
        grid-template-columns: repeat(6, 1fr);
        column-gap: rem(125);
    }
  }
}
</style>
