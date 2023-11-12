<template>
  <div class="advantage__card">
    <div class="advantage__card-icons">
      <img :src="require(`@/assets/images/advantages/${icon}.svg?inline`)" />
      <img :src="require(`@/assets/images/big-check.svg?inline`)" />
    </div>

    <div class="advantage__card-title">{{ title }}</div>
    <hr class="advantage__card-hr" />
    <div class="advantage__card-text">{{ text }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: String,
  icon: String,
  text: String,
})
</script>

<style lang="scss">
.advantage__card {
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: rgba(51, 51, 51, 0.21);
  backdrop-filter: blur(15px);
  padding: rem(16);
  height: rem(432);
  
  @include media-breakpoint-up(lg) {
    height: rem(450);
  }
  

  &-text {
    font-size: rem(14);
    line-height: 167.9%;
  }

  &-icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: rem(257);

    img {
      &:first-of-type {
        width: rem(99);
        height: rem(99);
      }

      &:last-of-type {
        width: rem(65);
        height: rem(65);
      }
    }
  }

  &-title {
    font-size: rem(20);
    font-weight: 600;
    margin-top: rem(28);
    line-height: 167.9%;
  }

  &-hr {
    margin: rem(25) 0;
  }
}
</style>
