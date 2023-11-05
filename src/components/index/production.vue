<template>
  <section class="production">
    <h1 class="production__title">Как мы работаем</h1>
    <div class="production__row">
      <div v-for="(item, i) in blocks" :key="i" class="production__block">
        <h2>{{ item.title }}</h2>
        <div class="production__text">{{ item.text }}</div>
        <div class="production__small">{{ item.small }}</div>
      </div>
    </div>
  </section>
</template>

<script setup>
const blocks = [
  {
    title: 'Клиент обращается в компанию',
    text: 'Наш менеджер связывается по заявке и дает подробную бесплатную консультацию',
  },
  {
    title: 'Замеры',
    text: 'Специалисты делают замеры, составляется подробное техническое задание.',
  },
  {
    title: 'Проектирование',
    text: 'Цель этого этапа — разработать эскиз мебели. Для этого нужно рассчитать все параметры и детально нарисовать внешний облик изделия, учитывая функциональность, внутреннее наполнение.',
  },
  {
    title: 'Доставка',
    text: 'Готовое изделие доставляется по указанному адресу и собирается монтажниками.',
  },
  {
    title: 'Создание',
    text: 'Утверждения и создание продукции. Сроки обсуждаются отдельно.*',
    small:
      '* Как правило, сроки составляют от 3 до 8 недель. Они зависят от сложности работы, особенностей дизайна и габаритов изделия.',
  },
]
</script>

<style lang="scss">
.production {
  padding: 0 rem(20);
  overflow: hidden;

  @include media-breakpoint-up(lg) {
    padding: 0 rem(130);
  }

  &__title {
    text-align: center;
    margin-bottom: rem(41);

    @include media-breakpoint-up(lg) {
      margin-bottom: rem(165);
    }
  }

  &__row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    row-gap: rem(60);

    @include media-breakpoint-up(lg) {
      column-gap: rem(77);
      row-gap: rem(63);
    }
  }

  &__block {
    display: flex;
    flex-direction: column;
    row-gap: rem(20);
    width: rem(482);
    position: relative;

    &:after,
    &:before {
      position: absolute;
      content: '';
      display: flex;
    }

    &:nth-child(1)::after {
      top: rem(127);
      left: rem(226);
      background: url('/assets/images/steps/step1.svg');
      width: rem(396);
      height: rem(267);
      background-size: rem(396) rem(267);
    }

    &:nth-child(2)::before {
      top: rem(24);
      left: rem(202);
      background: url('/assets/images/steps/step2.2.svg');
      width: rem(157);
      height: rem(76);
      background-size: rem(157) rem(76);
      z-index: -1;
    }

    &:nth-child(2)::after {
      top: rem(-152);
      left: rem(295);
      background: url('/assets/images/steps/step3.svg');
      width: rem(220);
      height: rem(212);
      background-size: rem(220) rem(212);
    }

    &:nth-child(3)::before {
      bottom: calc(100% - rem(38));
      left: 0;
      background: url('/assets/images/steps/step4.svg'), url('/assets/images/steps/step4.1.svg');
      width: rem(153);
      height: rem(158);
      background-position: top left, bottom right;
      background-repeat: no-repeat;
      background-size: rem(95) rem(95), rem(105) rem(95);
      z-index: -1;
    }

    &:nth-child(3)::after {
      top: rem(145);
      left: rem(195);
      background: url('/assets/images/steps/step6.1.svg');
      width: rem(431);
      height: rem(445);
      background-size: rem(431) rem(445);
    }

    &:nth-child(4)::before {
      bottom: rem(65);
      right: calc(100% + #{rem(30)});
      background: url('/assets/images/steps/step5.svg');
      width: rem(174);
      height: rem(166);
      background-size: rem(174) rem(166);
    }

    &:nth-child(4)::after {
      background: url('/assets/images/steps/step5.1.svg');
      width: rem(332);
      height: rem(196);
      top: rem(2.7);
      left: rem(391);
      background-size: rem(332) rem(196);
    }

    &:nth-child(5)::after {
      background: url('/assets/images/steps/step6.3.svg');
      width: rem(173);
      height: rem(110);
      right: 0;
      bottom: rem(168);
      background-size: rem(173) rem(110);
    }
  }

  &__text {
    font-size: rem(18);
    font-weight: 400;
    line-height: 167.9%;

    @include media-breakpoint-up(lg) {
      font-size: rem(24);
      max-width: rem(418);
    }
  }

  &__small {
    font-size: rem(14);
    font-style: italic;
    font-weight: 400;
    opacity: 0.78;
    line-height: 154.4%;
  }
}
</style>
