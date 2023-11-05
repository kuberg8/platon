<template>
  <div class="app">
    <IndexHeader :links="links" @scroll="scroll" />
    <IndexMain />
    <IndexFooter :links="links" @scroll="scroll" />
  </div>
</template>

<script setup>
import IndexHeader from '@/components/index/header.vue'
import IndexMain from '@/components/index/main.vue'
import IndexFooter from '@/components/index/footer.vue'

import { onMounted } from 'vue'

const scroll = (name) => {
  window.location.hash = '#online'
  document.querySelector(name)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const links = [
  {
    text: 'Рассчитать стоимость',
    link: '#online',
    event: (e) => {
      e.preventDefault()
      scroll('#online')
    },
  },
  { text: 'О нас', link: '#about' },
  { text: 'Наши работы', link: '#work' },
  { text: 'Контакты' },
]

onMounted(() => {
  switch (window.location.hash) {
    case '#online':
      scroll('#online')
      break
  }
})
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
