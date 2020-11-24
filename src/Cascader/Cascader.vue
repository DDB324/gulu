<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible"></div>
    <div class="popover" v-if="popoverVisible">
      <div class="level1">
        <div class="label" v-for="item1 in source" @click="level1Selected=item1">
          {{ item1.name }}
        </div>
      </div>
      <div class="level2">
        <div class="label" v-for="item2 in level2Items" @click="level2Selected=item2">
          {{ item2.name }}
        </div>
      </div>
      <div class="level3">
        <div class="label" v-for="item3 in level3Items">
          {{ item3.name }}
        </div>
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
  computed: {
    level2Items() {
      if(this.level1Selected){
        return this.level1Selected.children
      }else{
        return []
      }
    },
    level3Items() {
      if(this.level2Selected){
        return this.level2Selected.children
      }else{
        return []
      }
    },
  },
  data() {
    return {
      popoverVisible: false,
      level1Selected: null,
      level2Selected: null,
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

  .popover {
    width: 150px;
    height: 200px;
    border: 1px solid red;
    display: flex;
  }

  .label {
    white-space: nowrap;
  }
}
</style>