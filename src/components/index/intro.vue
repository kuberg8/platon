<template>
  <section id="intro" class="container">
    <div class="intro">
      <div>
        <div class="intro__title">Мы производим мебель из массива</div>
        <div class="intro__text">
          Нестандартная планировка жилого, коммерческого, или офисного помещения? Или требуется воплотить в жизнь
          сложную дизайнерскую задумку? Мы изготавливаем мебель на заказ по индивидуальным меркам!
        </div>
        <div class="intro__row">
          <VIntroCard v-for="(card, i) in cards" :key="i" v-bind="card" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import VIntroCard from '@/components/VIntroCard.vue'

const cards = [
  { title: 'Собственная\nмастерская', image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg' },
  { title: 'Поможем\nс чертежами', image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg' },
  { title: 'Доставка\nи установка', image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg' },
  { title: 'Материалы от\u00A0фанеры\u00A0до\u00A0массива', image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg' },
]
</script>

<style lang="scss">
.intro {
  display: grid;
  grid-template-columns: rem(950) auto;
  height: rem(800);
  border-radius: 10px;
  background: rgba(51, 51, 51, 0.21);
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.06);
  backdrop-filter: blur(10px);
  margin-top: rem(176);
  padding: rem(30);

  &__title {
    font-size: rem(75);
    font-weight: 800;
    line-height: 107.5%;
    letter-spacing: rem(2.625);
    width: rem(772.236);
    margin-bottom: rem(20);
    margin-top: rem(64);
  }

  &__text {
    width: rem(660.771);
  }

  &__row {
    display: flex;
    column-gap: rem(14);
    margin-top: rem(80);
  }
}
</style>
