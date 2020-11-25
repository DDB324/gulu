<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <CascaderItem :source-item="source"></CascaderItem>
    </div>
  </div>
</template>

<script>
import CascaderItem from './Cascader-items'

export default {
  name: 'GuluCascader',
  components: {
    CascaderItem
  },
  data() {
    return {
      popoverVisible: false,
    }
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
  .trigger {
    border: 1px solid red;
    width: 100px;
    height: 32px;
  }
}
</style>