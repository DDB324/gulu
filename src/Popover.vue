<template>
  <div class="popover" @click="xxx">
    <div ref="content" class="content-wrapper" v-if="visible">
      <slot name="content"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GuluPopover',
  data() {
    return {
      visible: false
    }
  },
  methods: {
    xxx() {
      this.visible = !this.visible
    }
  }
}
</script>

<style lang="scss" scoped>
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;

  .content-wrapper {
    position: absolute;
    border: 1px solid red;
    bottom: 100%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>