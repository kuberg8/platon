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
  </section>
</template>

<script setup>
import VButton from "../VButton.vue";
</script>

<style lang="scss">
.online {
  display: grid;
  grid-template-columns: rem(973) auto;
  padding-left: rem(130);
  padding-top: rem(45);
  height: rem(279);
  background: $color-grey;
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  z-index: 1;

  &__title {
    font-size: rem(50);
    font-weight: 600;
    line-height: 81%;
    letter-spacing: rem(1.75);
    margin-bottom: rem(26);

    &-color {
      color: $color-primary;
    }
  }

  &__text {
    width: rem(798.633);
    margin-bottom: rem(26.9);
  }
  
  &__button {
    justify-content: center;
    color: #333;
    width: rem(401);
    height: rem(45);
  }
}
</style>
