<template>
  <div class="app">
    <IndexHeader :links="headerLinks" @scroll="scroll" :contacts="contacts" />
    <IndexMain />
    <IndexFooter :links="footerLinks" @scroll="scroll" :contacts="contacts" />
  </div>
</template>

<script setup>
import IndexHeader from '@/components/index/header.vue'
import IndexMain from '@/components/index/main.vue'
import IndexFooter from '@/components/index/footer.vue'

import { onMounted, ref, provide } from 'vue'
import axios from '@/utils/axios'

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
  email: ''
})

provide('contacts', contacts)

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
</style>
