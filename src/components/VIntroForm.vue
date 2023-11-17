<template>
  <form ref="form" @submit.prevent="submit" class="intro__form">
    <div class="intro__form-title">Оставьте заявку на звонок</div>
    <div class="intro__form-subtitle">Наш менеджер свяжется с вами в течение 5 минут</div>
    <div class="intro__form-fields">
      <VInput v-model="formData.name" placeholder="Ваше имя" required />
      <VInput
        v-model="formData.phone"
        type="tel"
        placeholder="Номер телефона"
        required
      />
      <VInput v-model="formData.email" type="email" placeholder="E-mail" required />
      <VInput v-model="formData.info" placeholder="Дополнительная информация" />
      <VCheckbox v-model="formData.agree" required>Я принимаю условия обработки персональных данных</VCheckbox>
      <VButton type="submit">Оставить заявку на звонок</VButton>
    </div>
  </form>
</template>

<script setup>
import { ref, inject } from 'vue'
import VInput from './VInput.vue'
import VButton from './VButton.vue'
import VCheckbox from './VCheckbox.vue'
import axios from 'axios'

const alert = inject('alert')

const defaultValue = {
  name: '',
  phone: '',
  email: '',
  info: '',
  agree: false,
}
const formData = ref({ ...defaultValue })

const submit = async () => {
  const { name, phone, email, info, agree } = formData.value
  const isError = Object.values({ name, phone, email, agree }).some((val) => !val)

  if (!isError) {
    let text = ''

    const formDataArray = Object.entries({ name, phone, email, info })
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
.intro__form {
  display: flex;
  flex-direction: column;
  background: #333;
  box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.4);
  padding: rem(30);
  width: 100vw;
  color: #fff;
  max-height: 100%;
  height: 100vh;

  @include media-breakpoint-up(lg) {
    border-radius: 10px;
    padding: rem(49) rem(43);
    height: auto;
    width: auto;
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
    max-width: rem(365.139);
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
</style>
