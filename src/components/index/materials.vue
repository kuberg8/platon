<template>
  <section class="materials">
    <h1>Используемые материалы</h1>
    <div class="materials__row">
      <VMaterialsCard v-for="(card, i) in cards" :key="i" v-bind="card" :number="i + 1" />
    </div>
  </section>
</template>

<script setup>
import VMaterialsCard from '../VMaterialsCard.vue'

const cards = [
  { title: 'Дуб' },
  { title: 'Листвиница' },
  { title: 'Береза' },
  { title: 'Сосна' },
  { title: 'Падук' },
  { title: 'Тик' },
  { title: 'Осина' },
  { title: 'МДФ' },
  { title: 'Клён' },
  { title: 'ЛДСП' },
  { title: 'Ясень' },
  { title: 'Фанера' },
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
