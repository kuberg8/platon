<template>
  <section id="intro" class="container">
    <div class="intro">
      <div>
        <div class="intro__title">Мы&nbsp;производим мебель из массива</div>
        <div class="intro__text">
          Нестандартная планировка жилого, коммерческого, или офисного помещения? Или требуется воплотить в жизнь
          сложную дизайнерскую задумку? Мы изготавливаем мебель на заказ по индивидуальным меркам!
        </div>
        <div class="intro__row">
          <VIntroCard v-for="(card, i) in cards" :key="i" v-bind="card" />
        </div>
      </div>

      <div>
        <VIntroForm />
      </div>
    </div>
  </section>
</template>

<script setup>
import VIntroCard from '@/components/VIntroCard.vue'
import VIntroForm from '../VIntroForm.vue'

const cards = [
  { title: 'Собственная\nмастерская', image: 'assets/images/intro/111.png' },
  { title: 'Поможем\nс чертежами', image: 'assets/images/intro/222.png' },
  { title: 'Доставка\nи установка', image: 'assets/images/intro/333.png' },
  {
    title: 'Материалы от\u00A0фанеры\u00A0до\u00A0массива',
    image: 'assets/images/intro/444.png',
  },
]
</script>

<style lang="scss">
.intro {
  display: grid;
  grid-template-columns: 1fr;
  column-gap: rem(155);
  background: rgba(51, 51, 51, 0.21);
  backdrop-filter: blur(10px);

  .intro__form {
    display: none;

    @include media-breakpoint-up(lg) {
      display: flex;
    }
  }

  @include media-breakpoint-up(lg) {
    box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    height: rem(800);
    grid-template-columns: rem(950) rem(487);
    margin-top: rem(176);
    padding: rem(30);
  }

  &__title {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      font-weight: 800;
      letter-spacing: rem(2.625);
      font-size: rem(75);
      line-height: 107.5%;
      width: rem(772.236);
      margin-bottom: rem(20);
      margin-top: rem(64);
    }
  }

  &__text {
    display: none;

    @include media-breakpoint-up(lg) {
      display: block;
      width: rem(660.771);
    }
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: rem(10);
    row-gap: rem(10);
    margin-top: rem(20);

    @include media-breakpoint-up(lg) {
      display: flex;
      column-gap: rem(14);
      margin-top: rem(80);
    }
  }
}
</style>
