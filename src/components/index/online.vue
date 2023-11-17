<template>
  <section id="online" class="online">
    <div>
      <div class="online__title">Узнайте цену своего изделия <span class="online__title-color"> онлайн </span></div>
      <div class="online__text">
        Мы поможем подобрать Вам лучшее решение для Вашей квартиры, коттеджа, дачи, террасы, офиса и любых других
        помещений так, что бы потом не жалеть!
      </div>
      <VButton @click="openForm" class="online__button">Рассчитать</VButton>
    </div>

    <form class="online__form" @submit.prevent="submit">
      <VInput v-model="formData.name" placeholder="Ваше имя" required />
      <VInput
        v-model="formData.phone"
        type="tel"
        placeholder="Номер телефона"
        required
      />
      <VCheckbox v-model="formData.agree" required>Я принимаю условия обработки персональных данных</VCheckbox>
      <VButton type="submit">Оставить заявку на звонок</VButton>
    </form>
  </section>
</template>

<script setup>
import VButton from '../VButton.vue'
import VInput from '../VInput.vue'
import VCheckbox from '../VCheckbox.vue'
import { ref, inject } from 'vue'
import axios from 'axios'

const openForm = inject('openForm')
const alert = inject('alert')

const defaultValue = {
  name: '',
  phone: '',
  agree: false,
}
const formData = ref({ ...defaultValue })

const submit = async () => {
  const { name, phone, agree } = formData.value
  const isError = Object.values({ name, phone, agree }).some((val) => !val)

  if (!isError) {
    let text = ''

    const formDataArray = Object.entries({ name, phone })
    formDataArray.forEach(([key, value], i) => {
      if (value) {
        text += `${key}: ${value}${i < formDataArray.length - 1 ? '%0A' : ''}`
      }
    })

    const url = `https://api.telegram.org/bot${process.env.VUE_APP_TG_TOKEN}/sendMessage?chat_id=${process.env.VUE_APP_TG_ID}&text=${text}&parse_mode=HTML`
    await axios.get(url)

    formData.value = { ...defaultValue }
    alert()
  }
}
</script>

<style lang="scss">
.online {
  display: grid;
  grid-template-columns: 1fr;
  background: $color-grey;
  box-shadow: 0px rem(20) rem(50) 0px rgba(0, 0, 0, 0.4);
  z-index: 1;
  padding: rem(30) rem(20) rem(23);

  &__mobile {
    @include media-breakpoint-up(lg) {
      display: none;
    }
  }

  &__desktop {
    display: none;

    @include media-breakpoint-up(lg) {
      display: grid;
    }
  }

  @include media-breakpoint-up(lg) {
    grid-template-columns: rem(973) rem(402);
    column-gap: rem(131);
    padding: rem(45) 0 rem(41) rem(130);
  }

  &__title {
    font-weight: 600;
    line-height: 81%;
    letter-spacing: rem(1.75);
    font-size: rem(24);
    line-height: rem(25);
    margin-bottom: rem(15);

    @include media-breakpoint-up(lg) {
      font-size: rem(50);
      margin-bottom: rem(26);
    }

    &-color {
      color: $color-primary;
    }
  }

  &__text {
    font-size: rem(14);
    line-height: rem(18);
    max-width: rem(260);
    margin-bottom: rem(15);
    
    @include media-breakpoint-up(lg) {
      max-width: rem(798.633);
      font-size: rem(18);
      line-height: 202.9%;
      max-width: auto;
      margin-bottom: rem(26.9);
    }
  }

  &__button {
    justify-content: center;
    color: #333;
    width: 100%;

    @include media-breakpoint-up(lg) {
      width: rem(401);
    }
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
