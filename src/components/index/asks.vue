<template>
  <section class="asks">
    <div class="asks__left">
      <img class="asks__img" src="assets/images/ask.png" />
      <div class="asks__title">Остались вопросы?</div>
      <div class="asks__text">Оставьте заявку, мы вас проконсультируем и ответим на Ваши вопросы</div>
    </div>

    <form class="asks__form" @submit.prevent>
      <VInput placeholder="Ваше имя" required />
      <VInput placeholder="Номер телефона" required />
      <VCheckbox>Я принимаю условия обработки персональных данных</VCheckbox>
      <VButton type="submit">Оставить заявку на звонок</VButton>
    </form>
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
  grid-template-columns: 1fr;
  background: $color-grey;
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  z-index: 1;
  position: relative;
  margin-bottom: rem(-50);

  @include media-breakpoint-up(lg) {
    height: rem(316);
    grid-template-columns: rem(410) rem(440);
    column-gap: rem(131);
    padding-left: rem(649);
    margin-bottom: rem(-200);
  }

  &__img {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    width: rem(724.119);
    height: rem(1085.627);
  }

  &__left {
    padding-top: rem(84);
    max-width: rem(410);
  }

  &__title {
    @include media-breakpoint-up(lg) {
      font-size: rem(34);
      font-style: normal;
      font-weight: 800;
      line-height: 100.5%;
      letter-spacing: rem(1.19);
      margin-bottom: rem(20);
    }
  }

  &__text {
    @include media-breakpoint-up(lg) {
      line-height: 154.4%;
    }
  }

  &__button {
    justify-content: center;
    color: #333;
    width: rem(401);
    height: rem(45);
  }

  &__form {
    display: none;
    flex-direction: column;
    row-gap: rem(20);

    @include media-breakpoint-up(lg) {
      display: flex;
      padding-top: rem(34);
    }

    .btn {
      width: 100%;
      color: #333;
    }
  }
}
</style>
