<template>
  <div class="intro__card">
    <img :src="require(`@/assets/images/big-check.svg?inline`)" class="intro__card-check" />
    {{ title }}
    <img v-if="image" :src="image" class="intro__card-img" />
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
.intro__card {
  border-radius: 10px;
  background: linear-gradient(0deg, #000 14.2%, rgba(0, 0, 0, 0) 62.15%);
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.06);
  width: rem(167.34);
  height: rem(163.654);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  font-size: rem(18);
  font-weight: 700;
  line-height: rem(22);
  white-space: pre-line;
  position: relative;
  overflow: hidden;
  row-gap: rem(15);

  @include media-breakpoint-up(lg) {
    width: rem(227);
    height: rem(222);
    padding-left: rem(10);
    padding-bottom: rem(20);
  }

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &-check {
    width: rem(65);
    height: rem(65);
  }
}
</style>
