<template>
  <div class="field__wrapper">
    <span v-if="required" class="field__required">*</span>
    <input class="field" :class="{ required }" v-bind="$attrs" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  required: Boolean,
})
</script>

<style lang="scss">
.field {
  display: flex;
  width: 100%;
  height: rem(45);
  padding: rem(6.5) rem(20) rem(1.5);
  align-items: center;
  border-radius: 5px;
  background: var(--Gray-2, #4f4f4f);

  &.required {
    padding-left: rem(35);
  }

  &__required {
    display: flex;
    align-items: center;
    justify-content: center;
    width: rem(11);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: rem(20);
    color: $color-primary;
  }

  &__wrapper {
    position: relative;
  }
}
</style>
