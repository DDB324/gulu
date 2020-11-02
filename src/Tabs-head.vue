<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  created() {
    // console.log(this.eventBus);
  }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  height: $tab-height;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .actions-wrapper {
    margin-left: auto
  }
}
</style>