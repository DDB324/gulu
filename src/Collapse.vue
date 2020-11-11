<template>
  <div class="collapse">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'GuluCollapse',
  data() {
    return {
      eventBus: new Vue()
    }
  },
  props: {
    single: {
      type: Boolean,
      default: false,
    },
    activeName: {
      type: Array,
      default: []
    }
  },
  provide() {
    return {
      eventBus: this.eventBus
    }
  },
  mounted() {
    let copyActiveName = JSON.parse(JSON.stringify(this.activeName))
    let updateActiveName = () => {
      this.eventBus.$emit('update:activeName', copyActiveName)
      this.$emit('update:activeName', copyActiveName)
    }
    this.eventBus && this.eventBus.$emit('update:activeName', this.activeName)
    this.eventBus && this.eventBus.$on('update:addActiveName', (name) => {
      this.single ? copyActiveName = [name] : copyActiveName.push(name)
      updateActiveName()
    })
    this.eventBus && this.eventBus.$on('update:removeActiveName', (name) => {
      let nameIndex = copyActiveName.indexOf(name)
      copyActiveName.splice(nameIndex, 1)
      updateActiveName()
    })
  }
}
</script>

<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapse {
}
</style>