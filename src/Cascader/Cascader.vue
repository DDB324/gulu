<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <div v-for="item in source">
        <CascaderItem :sourceItem="item"></CascaderItem>
      </div>
    </div>
  </div>
</template>

<script>
import CascaderItem from './Cascader-item'

export default {
  name: 'GuluCascader',
  components: {
    CascaderItem
  },
  props: {
    source: {
      type: Array,
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/style/helper";

.cascader {

}
</style>