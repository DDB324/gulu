<template>
  <div class="cascaderItem">
    {{ sourceItem.name }}
    <GuluCascaderItem
        v-if="sourceItem.children"
        v-for="item in sourceItem.children"
        :sourceItem="item"></GuluCascaderItem>
  </div>
</template>

<script>
export default {
  name: 'GuluCascaderItem',
  props: {
    sourceItem: {
      type: Object,
    }
  }
}
</script>

<style lang="scss" scoped>
.cascaderItem{
  border:1px solid red;
  margin:10px;
}
</style>