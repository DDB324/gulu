<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible" :style="popoverStyleObject">
      <CascaderItems :source-item="source"></CascaderItems>
    </div>
  </div>
</template>

<script>
import CascaderItems from './Cascader-items'

export default {
  name: 'GuluCascader',
  components: {
    CascaderItems
  },
  computed: {
    popoverStyleObject() {
      return this.popoverHeight ? {height: this.popoverHeight + 'px'} : null;
    }
  },
  data() {
    return {
      popoverVisible: false,
    }
  },
  props: {
    source: {
      type: Array,
    },
    popoverHeight: {
      type: String
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/style/helper";

.cascader {
  position: relative;

  .trigger {
    border: 1px solid red;
    width: 100px;
    height: 32px;
  }

  .popover {
    @extend %box-shadow;
    height: 100px;
    top: 100%;
    left: 0;
    position: absolute;
    background: white;
  }
}
</style>