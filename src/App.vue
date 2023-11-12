<template>
  <div class="app">
    <IndexHeader :links="headerLinks" @scroll="scroll" :contacts="contacts" @showDialog="formIsOpen = true" />
    <IndexMain />
    <IndexFooter :links="footerLinks" @scroll="scroll" :contacts="contacts" @showDialog="formIsOpen = true" />

    <VModal :open="formIsOpen" @close="formIsOpen = false">
      <VIntroForm />
    </VModal>
    <VModal :open="alertIsOpan" @close="alertIsOpan = false">
      <div class="feedback">
        <div class="feedback__title">Спасибо!</div>
        <div class="feedback__text">Ваша заявка принята, скоро с вами свяжемся!</div>
      </div>
    </VModal>
  </div>
</template>

<script setup>
import IndexHeader from '@/components/index/header.vue'
import IndexMain from '@/components/index/main.vue'
import IndexFooter from '@/components/index/footer.vue'

import { onMounted, ref, provide } from 'vue'
import axios from '@/utils/axios'
import VIntroForm from './components/VIntroForm.vue'
import VModal from './components/VModal.vue'

const formIsOpen = ref(false)
const alertIsOpan = ref(false)

const scroll = (name) => {
  window.location.hash = name
  document.querySelector(name)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const headerLinks = [
  {
    text: 'Рассчитать стоимость',
    link: '#online',
    event: (e) => {
      e.preventDefault()
      scroll('#online')
    },
  },
  {
    text: 'О нас',
    link: '#about',
    event: (e) => {
      e.preventDefault()
      scroll('#about')
    },
  },
  {
    text: 'Наши работы',
    link: '#work',
  },
  { text: 'Контакты', link: '#contacts' },
]

const footerLinks = [
  {
    text: 'Рассчитать стоимость',
    link: '#online',
    event: (e) => {
      e.preventDefault()
      scroll('#online')
    },
  },
  {
    text: 'О нас',
    link: '#about',
    event: (e) => {
      e.preventDefault()
      scroll('#about')
    },
  },
  { text: 'Наши работы', link: '#work' },
  {
    text: 'Отзывы',
    link: '#reviews',
    event: (e) => {
      e.preventDefault()
      scroll('#reviews')
    },
  },
  { text: 'Контакты', link: '#contacts' },
]

const contacts = ref({
  vk: '',
  instagram: '',
  address: '',
  phone: '',
  email: '',
})

provide('contacts', contacts)
provide('alert', () => {
  if (formIsOpen.value) {
    formIsOpen.value = false
    setTimeout(() => {
      alertIsOpan.value = true
    }, 300)
  } else {
    alertIsOpan.value = true
  }
})

onMounted(async () => {
  window.location.hash && scroll(window.location.hash)
  const { data } = await axios.get('contacts')
  if (data) {
    const [resContacts] = data
    contacts.value = resContacts?.acf
  }
})
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
}

.feedback {
  display: flex;
  flex-direction: column;
  row-gap: rem(8);
  font-size: rem(16);
  font-weight: 500;
  line-height: 182.4%;
  background: #333;
  padding: rem(45) rem(45) rem(35);
  border-radius: 10px;
  color: #fff;
  width: 90vw;

  @include media-breakpoint-up(lg) {
    width: rem(487);
  }

  &__title {
    font-size: rem(28);
    font-style: normal;
    font-weight: 800;
    line-height: 100.5%;
    letter-spacing: 0.98px;
  }

  &__text {
    max-width: rem(250);
  }
}
</style>
