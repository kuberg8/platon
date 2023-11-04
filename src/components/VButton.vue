<template>
  <component
    :is="tag"
    :disabled="disabled"
    :class="[{ disabled, circle, text }]"
    :type="tag === 'button' ? type : null"
    class="btn"
    v-bind="$attrs"
  >
    <slot>
      <span v-if="title">
        {{ title }}
      </span>

      <img v-if="icon" :src="require(`@/assets/images/${icon}.svg?inline`)" />
    </slot>
  </component>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    tag: {
      type: String,
      default: 'button',
    },
    text: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: null,
    },
    icon: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    circle: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.btn {
  display: flex;
  align-items: center;
  height: rem(36);
  padding: 0 rem(14);
  background: $color-primary;
  border-radius: 5px;
  transition: .2s;

  &:hover {
    background: $color-hover-primary;
  }

  &.circle {
    border-radius: 50%;
    width: rem(60);
    height: rem(60);
  }

  &.text {
    padding: 0;
    height: auto;
    background: none;
  }
}
</style>