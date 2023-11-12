<template>
  <transition name="fade">
    <div v-if="open" class="dialog__backdrop" @click="$emit('close')">
      <div class="dialog" @click.stop>
        <slot />
        <img @click="$emit('close')" :src="require(`@/assets/images/close.svg`)" class="dialog__close" />
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  open: Boolean,
})
</script>

<style lang="scss" scoped>
.dialog {
  position: relative;

  &__backdrop {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    animation: modal 0.3s;
  }

  &__close {
    position: absolute;
    top: rem(5);
    right: rem(5);
    width: rem(44);
    height: rem(44);

    @include media-breakpoint-up(lg) {
      display: block;
      left: calc(100% + #{rem(38)});
      top: rem(-32);
      width: rem(64);
      height: rem(64);
      cursor: pointer;
      transition: 0.3s;
    }

    &:hover {
      transform: scale(1.2);
    }
  }

  @keyframes modal {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
