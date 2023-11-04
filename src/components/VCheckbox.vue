<template>
  <div class="checkbox" @click="check = !check">
    <svg
      class="checkbox__icon"
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.78" x="0.5" y="4.47461" width="14" height="14" rx="2.5" stroke="#F2F2F2" />
      <path v-if="check" d="M2.08106 9.03974L7.40768 14.3664L16.1917 3.97488" stroke="#11AEAE" stroke-width="3" />
    </svg>

    <div class="checkbox__text">
        <slot />
    </div>
    <input hidden />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const check = ref(false)
</script>

<style lang="scss">
.checkbox {
  display: flex;
  align-items: flex-end;
  // column-gap: rem(23);
  column-gap: rem(13);
  font-size: rem(12);
  font-weight: 400;
  line-height: 154.4%;
  cursor: pointer;
  color: rgba(#F2F2F2, 0.7);

  &__icon {
    width: rem(18);
    height: rem(18);
  }

  &__text {
    line-height: rem(12);
    margin-bottom: rem(1);
  }
}
</style>
