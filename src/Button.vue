<template>
  <button class="g-button" :class="{[`icon-${iconPosition}`]: true}">
    <svg v-if="icon" class="icon">
      <use :xlink:href="`#i-${icon}`"/>
    </svg>
    <span class="content">
      <slot></slot>
    </span>
  </button>
</template>

<script lang='ts'>
export default {
  props: {
    icon: {},
    iconPosition: {
      type: String,
      default: 'left',
      validator(value) {
        return value === 'left' || value === 'right';
      }
    }
  }
};
</script>

<style lang='scss' scoped>
.g-button {
  height: var(--button-height);
  font-size: var(--font-size);
  padding: 0 1em; /*没有写宽度，把按钮的宽度写死是不好的*/
  border-radius: var(--border-radius);
  border: 1px solid var(--border-color);
  background: var(--button-bg);
  //display: flex;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;

  .content {
    order: 2;
  }

  .icon {
    order: 1;
    margin-right: .1em;
  }

  &:hover {
    border-color: var(--border-color-hover)
  }

  &:active {
    background: var(--button-active-bg);
  }

  &:focus {
    outline: none;
  }

  &.icon-right {
    .content {
      order: 1;
    }

    .icon {
      order: 2;
      margin-right: 0;
      margin-left: .1em;
    }
  }
}
</style>