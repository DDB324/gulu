<template>
  <label class="wrapper" :class="{error}">
    <input :value="value" :disabled="disabled" :readonly="readOnly" type="text">
    <template v-if="error">
      <Icon name="error" class="icon-error"></Icon>
      <span class="errorMessage">{{ error }}</span>
    </template>
  </label>
</template>

<script>
import Icon from './Icon.vue'

export default {
  components: {
    Icon
  },
  name: 'GuluInput',
  // props: ['value'],
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 14px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {font-size: $font-size;display: inline-flex;align-items: center;

  :not(:last-child) {margin-right: .5em;}

  input {height: $height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;

    &:hover {border-color: $border-color-hover;}

    &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}

    &[disabled], &[readonly] {border-color: #ccc;color: #ccc;cursor: not-allowed;}
  }

  &.error {
    input {border-color: $red;}
  }

  .icon-error {fill: $red;}

  .errorMessage {color: $red;}
}
</style>