<template>
  <div class="tabs-item">
    <slot></slot>
    <slot name="actions"></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsItem',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss">
.tabs-item {

}
</style>