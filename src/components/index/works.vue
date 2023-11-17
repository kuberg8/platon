<template>
  <section class="work__section">
    <div id="work" class="work__anchor" />
    <VSwiper
      v-if="works.length"
      :breakpoints="breakpoints"
      :slidesPerView="1.1"
      :items="works"
      wrapper-class="card__wrapper"
      class="work container"
    >
      <template #default="{ item }">
        <VCard v-bind="item" />
      </template>
    </VSwiper>

    <div class="container">
      <VButton @click="openForm" class="work__button">Рассчитать свой проект</VButton>
    </div>
  </section>
</template>

<script setup>
import VSwiper from '../VSwiper.vue'
import VCard from '../VCard.vue'
import VButton from '../VButton.vue'
import { onMounted, ref, inject } from 'vue'
import axios from '@/utils/axios'

const openForm = inject('openForm')

const works = ref([])

const breakpoints = {
  1280: {
    slidesPerView: 3.1,
  },
}

onMounted(async () => {
  const { data } = await axios.get('works')
  const acf = data?.map(({ acf }) => acf)
  if (acf) {
    // const groupBy = Object.groupBy || Array.group
    // const res = groupBy(acf, ({ type }) => type)

    const res = acf.reduce((x, y) => {
      (x[y.type] = x[y.type] || []).push(y)

      return x
    }, {})

    works.value = Object.entries(res).map(([key, values]) => ({
      title: key,
      items: values,
    }))
  }
})
</script>

<style lang="scss">
.work {
  &__section {
    position: relative;
  }

  &__anchor {
    position: absolute;
    top: rem(-25);

    @include media-breakpoint-up(lg) {
      top: rem(-100);
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }

  &__button {
    width: 100%;

    @include media-breakpoint-up(lg) {
      display: none;
    }
  }
}
</style>
