<template>
  <div class="popover" @click.stop="xxx">
    <div ref="content" class="content-wrapper"
         @click.stop
         v-if="visible">
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
      console.log('-----')
      this.visible = !this.visible
      if (this.visible === true) {
        setTimeout(() => {
          let eventHandler = () => {
            this.visible = false
            console.log('document隐藏了popover')
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        }, 0)
      } else {
        console.log('vm隐藏了popover')
      }
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