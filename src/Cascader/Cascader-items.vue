<template>
  <div class="cascaderItems">
    <div class="left">
      <div class="label" v-for="item in sourceItem" @click="leftSelected=item">
        {{ item.name }}
      </div>
    </div>
    <div class="right" v-if="rightSelected">
      <GuluCascaderItem :source-item="rightSelected"></GuluCascaderItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluCascaderItem',
  computed:{
    rightSelected(){
      if(this.leftSelected && this.leftSelected.children){
        return this.leftSelected.children
      }else{
        return null
      }
    }
  },
  props: {
    sourceItem: {
      type: Array,
    }
  },
  data(){
    return {
      leftSelected: null,
    }
  },
}
</script>

<style lang="scss" scoped>
.cascaderItems{
  display:flex;
  .left{
    outline:1px solid red;
  }
}
</style>