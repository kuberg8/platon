<template>
  <section class="asks">
    <div class="asks__left">
      <img class="asks__img" src="assets/images/grass.png" />
      <div class="asks__title">Остались вопросы?</div>
      <div class="asks__text">Оставьте заявку, мы вас проконсультируем и ответим на&nbsp;Ваши вопросы</div>
    </div>

    <form class="asks__form" @submit.prevent="submit">
      <VInput placeholder="Ваше имя" required />
      <VInput placeholder="Номер телефона" required />
      <VCheckbox>Я принимаю условия обработки персональных данных</VCheckbox>
      <VButton type="submit">Оставить заявку на звонок</VButton>
    </form>

    <VButton class="asks__button">Оставить заявку на звонок</VButton>
  </section>
</template>

<script setup>
import VButton from '../VButton.vue'
import VInput from '../VInput.vue'
import VCheckbox from '../VCheckbox.vue'
</script>

<style lang="scss">
.asks {
  display: grid;
  align-items: flex-end;
  grid-template-columns: 1fr;
  background: $color-grey;
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  z-index: 1;
  position: relative;
  margin-bottom: rem(-50);
  padding: rem(30) rem(15) rem(10);

  @include media-breakpoint-up(lg) {
    display: grid;
    grid-template-columns: rem(410) rem(440);
    column-gap: rem(131);
    padding: rem(34.5) rem(97.5) rem(43.5) rem(649);
    margin-bottom: rem(-200);
  }

  &__img {
    position: absolute;
    left: rem(200);
    bottom: rem(60);
    width: rem(215);

    @include media-breakpoint-up(lg) {
      left: rem(50);
      bottom: rem(-40);
      width: rem(724.119);
      height: rem(1085.627);
    }
  }

  &__left {
    max-width: rem(220);

    @include media-breakpoint-up(lg) {
      padding-top: rem(50);
      max-width: rem(410);
    }
  }

  &__title {
    font-size: rem(22);
    white-space: nowrap;
    font-weight: 600;
    line-height: 107%;
    letter-spacing: rem(0.77);
    margin-bottom: rem(7);

    @include media-breakpoint-up(lg) {
      font-size: rem(34);
      font-weight: 800;
      line-height: 100.5%;
      letter-spacing: rem(1.19);
      margin-bottom: rem(20);
    }
  }

  &__text {
    font-size: rem(14);
    font-weight: 400;
    line-height: rem(18);

    @include media-breakpoint-up(lg) {
      font-size: rem(18);
      line-height: 154.4%;
    }
  }

  &__button {
    justify-content: center;
    color: #333;
    width: rem(401);
  }

  &__form {
    display: none;
    flex-direction: column;
    row-gap: rem(20);

    @include media-breakpoint-up(lg) {
      display: flex;
    }

    .btn {
      width: 100%;
      color: #333;
    }
  }

  &__button {
    width: 100%;
    color: #fff;
    margin-top: rem(20);

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }
}
</style>
