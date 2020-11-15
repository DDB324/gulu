<template>
  <button class="g-button ddb2" :disabled="disabled" @click="$emit('click')" :class="{[`icon-${iconPosition}`]: true}">
    <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
    <g-icon class="loading icon" v-if="loading" name="loading"></g-icon>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script lang='ts'>
import Icon from './Icon.vue';

export default {
  name: 'GuluButton',
  components: {
    'g-icon': Icon,
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right';
      }
    },
    disabled: {
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style lang='scss' scoped>
$button-height: 32px;
$font-size: 14px;
$button-bg: white;
$button-active-bg: #eee;
$border-radius: 4px;
$color: #333;
$border-color: #999;
$border-color-hover: #666;

@keyframes spin {
  0% {transform: rotate(0deg)}
  100% {transform: rotate(360deg)}
}

.loading {animation: spin 1s infinite linear;}

.g-button {
  height: $button-height;
  font-size: $font-size;
  padding: 0 1em; /*没有写宽度，把按钮的宽度写死是不好的*/
  border-radius: $border-radius;
  border: 1px solid $border-color;
  background: $button-bg;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  .content {order: 2;}

  .icon {order: 1;margin-right: .1em;}

  &:hover {border-color: $border-color-hover}

  &:active {background: $button-active-bg;}

  &:focus {outline: none;}

  &.icon-right {
    .content {order: 1;}

    .icon {order: 2;margin-right: 0;margin-left: .1em;}
  }
}
</style>