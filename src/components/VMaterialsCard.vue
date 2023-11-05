<template>
  <div class="materials__card">
    <img :src="image" />
    {{ title }}
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  image: String,
  title: String,
})
</script>

<style lang="scss">
.materials__card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: rem(10);

  img {
    border-radius: 50%;
    width: rem(97);
    height: rem(97);

    @include media-breakpoint-up(lg) {
      width: rem(150);
      height: rem(150);
    }
  }
}
</style>
