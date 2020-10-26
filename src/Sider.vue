<template>
  <transition name="fade">
    <div class="sider" v-if="visible">
      <slot></slot>
      <button @click="visible=!visible">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'GuluSider',
  data() {
    return {
      visible: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sider {
  position: relative;

  button {
    position: absolute;
    top: 0;
    right: 0;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>