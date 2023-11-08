<template>
  <div class="app">
    <IndexHeader :links="headerLinks" @scroll="scroll" />
    <IndexMain />
    <IndexFooter :links="footerLinks" @scroll="scroll" />
  </div>
</template>

<script setup>
import IndexHeader from '@/components/index/header.vue'
import IndexMain from '@/components/index/main.vue'
import IndexFooter from '@/components/index/footer.vue'

import { onMounted } from 'vue'

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
    link: '#work'
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

onMounted(() => scroll(window.location.hash))
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
