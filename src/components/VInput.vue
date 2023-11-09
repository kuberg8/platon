<template>
  <div class="field__wrapper">
    <span v-if="required" class="field__required">*</span>
    <input
      v-model="val"
      @input="handleInput"
      class="field"
      :class="{ required }"
      v-bind="$attrs"
      :required="required"
    />
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits, watch } from 'vue'

const props = defineProps({
  required: Boolean,
  phone: Boolean,
  modelValue: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const val = ref('')

watch(
  () => props.modelValue,
  (nVal) => (val.value = nVal),
  {
    immediate: true,
  }
)

watch(
  () => props.modelValue,
  (nVal) => (val.value = nVal),
  {
    immediate: true,
  }
)

const handleInput = () => emit('update:modelValue', val.value)
</script>

<style lang="scss">
.field {
  display: flex;
  width: 100%;
  height: rem(45);
  padding: rem(6.5) rem(20) rem(1.5);
  align-items: center;
  border-radius: 5px;
  background: #4f4f4f;
  transition: 0.5s border;
  border: 1px solid transparent;
  //   color: #bdbdbd;

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

  &::placeholder {
    color: #bdbdbd;
  }

  &.error {
    border: 1px solid #dc143c;
  }
}
</style>
