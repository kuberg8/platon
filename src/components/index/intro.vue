<template>
  <section id="intro" class="container">
    <div class="intro">
      <div>
        <div class="intro__title">Мы&nbsp;производим мебель из массива</div>
        <VButton class="intro__button"> Заказать звонок </VButton>
        <div class="intro__text">
          Нестандартная планировка жилого, коммерческого, или офисного помещения? Или требуется воплотить в жизнь
          сложную дизайнерскую задумку? Мы изготавливаем мебель на заказ по индивидуальным меркам!
        </div>
        <div class="intro__row">
          <VIntroCard v-for="(card, i) in cards" :key="i" v-bind="card" />
        </div>
      </div>

      <div>
        <form @submit.prevent class="intro__form">
          <div class="intro__form-title">Оставьте заявку на звонок</div>
          <div class="intro__form-subtitle">Наш менеджер свяжется с вами в течение 5 минут</div>
          <div class="intro__form-fields">
            <VInput placeholder="Ваше имя" required />
            <VInput placeholder="Номер телефона " required />
            <VInput placeholder="E-mail" required />
            <VInput placeholder="Дополнительная информация" />
            <VCheckbox>Я принимаю условия обработки персональных данных</VCheckbox>
            <!-- <VFile>Добавить свой эскиз</VFile> -->
            <VButton type="submit">Оставить заявку на звонок</VButton>
          </div>
          <!-- <span class="intro__form-info">Чтобы добавить сразу несколько изображений, используйте клавишу Shift</span> -->
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import VIntroCard from '@/components/VIntroCard.vue'
import VInput from '../VInput.vue'
import VButton from '../VButton.vue'
import VCheckbox from '../VCheckbox.vue'

const cards = [
  { title: 'Собственная\nмастерская', image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg' },
  { title: 'Поможем\nс чертежами', image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg' },
  { title: 'Доставка\nи установка', image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg' },
  {
    title: 'Материалы от\u00A0фанеры\u00A0до\u00A0массива',
    image: 'https://ruplans.ru/cms_files/39111/1035/108/1_1_sovremenniy.jpg',
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
  
  @include media-breakpoint-up(lg) {
    box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    height: rem(800);
    grid-template-columns: rem(950) rem(487);
    margin-top: rem(176);
    padding: rem(30);
  }

  &__title {
    font-size: rem(40);
    font-weight: 800;
    line-height: 107.5%;
    text-align: center;
    letter-spacing: rem(1.4);

    @include media-breakpoint-up(lg) {
      letter-spacing: rem(2.625);
      font-size: rem(75);
      width: rem(772.236);
      margin-bottom: rem(20);
      margin-top: rem(64);
      text-align: left;
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

  &__form {
    display: none;
    flex-direction: column;
    border-radius: 10px;
    background: #333;
    box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.4);
    padding: rem(49) rem(43);

    @include media-breakpoint-up(lg) {
      // height: rem(690);
      height: auto;
      display: flex;
    }

    &-title {
      font-size: rem(28);
      font-weight: 800;
      line-height: 100.5%;
      letter-spacing: rem(0.98);
      margin-bottom: rem(8);
    }

    &-subtitle {
      font-size: rem(19);
      font-weight: 500;
      line-height: 182.4%;
      width: rem(365.139);
      margin-bottom: rem(20);
    }

    &-fields {
      display: flex;
      flex-direction: column;
      row-gap: rem(20);
    }

    .btn {
      color: #333;
    }

    // &-info {
    //   text-align: center;
    //   margin: rem(23) 0;
    //   font-size: rem(12);
    //   font-weight: 400;
    //   line-height: 154.4%;
    //   color: rgba(#f2f2f2, 0.7);
    //   width: rem(365.555);
    // }
  }

  &__button {
    width: 100%;
    margin-top: rem(20);

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }
}
</style>
