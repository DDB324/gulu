<template>
  <div class="g-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'GuluButtonGroup',
  mounted() {
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== 'button') {
        console.warn(`g-button-group的子元素应该全是g-button,但是这个为${name}`);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/helper";

.g-button-group {
  display: inline-flex;
  vertical-align: middle;

  .g-button {
    border-radius: 0;

    &:not(:first-child) {
      margin-left: -1px;
    }

    &:first-child {
      border-bottom-left-radius: $border-radius;
      border-top-left-radius: $border-radius
    }

    &:last-child {
      border-bottom-right-radius: $border-radius;
      border-top-right-radius: $border-radius
    }

    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>