<template>
  <section class="online">
    <div>
      <div class="online__title">Узнайте цену своего изделия <span class="online__title-color"> онлайн </span></div>
      <div class="online__text">
        Мы поможем подобрать Вам лучшее решение для Вашей квартиры, коттеджа, дачи, террасы, офиса и любых других
        помещений так, что бы потом не жалеть!
      </div>
      <VButton class="online__button">Рассчитать</VButton>
    </div>

    <form class="online__form" @submit.prevent>
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
.online {
  display: grid;
  grid-template-columns: 1fr;
  background: $color-grey;
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  z-index: 1;
  // height: rem(250);
  
  @include media-breakpoint-up(lg) {
    height: rem(279);
    grid-template-columns: rem(973) rem(402);
    column-gap: rem(131);
    padding-left: rem(130);
    padding-top: rem(45);
  }

  &__title {
    font-weight: 600;
    line-height: 81%;
    letter-spacing: rem(1.75);

    @include media-breakpoint-up(lg) {
      font-size: rem(50);
      margin-bottom: rem(26);
    }

    &-color {
      color: $color-primary;
    }
  }

  &__text {
    @include media-breakpoint-up(lg) {
      width: rem(798.633);
      margin-bottom: rem(26.9);
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
    }

    .btn {
      width: 100%;
      color: #333;
    }
  }
}
</style>
