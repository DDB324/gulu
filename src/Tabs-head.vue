<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluTabsHead',
  inject: ['eventBus'],
  mounted() {
    this.eventBus.$on('update:selected', (item, vm) => {
      let {width, left} = vm.$el.getBoundingClientRect()
      this.$refs.line.style.width = `${width}px`
      this.$refs.line.style.left = `${left}px`
    })
  }
}
</script>

<style lang="scss" scoped>
$tab-height: 40px;
$blue: blue;
.tabs-head {
  height: $tab-height;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ddd;

  .line {
    transition: all 300ms;
    position: absolute;
    bottom: 0;
    border-bottom: 2px solid $blue;
  }

  .actions-wrapper {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1em;
  }
}
</style>