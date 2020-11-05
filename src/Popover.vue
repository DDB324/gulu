<template>
  <div class="popover" @click.stop="xxx">
    <div ref="contentWrapper" class="content-wrapper"
         @click.stop
         v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper">
    <slot></slot>
    </span>
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
        this.$nextTick(() => {
          let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
          this.$refs.contentWrapper.style.top = top + scrollY + 'px'
          this.$refs.contentWrapper.style.left = left + scrollX + 'px'
          document.body.appendChild(this.$refs.contentWrapper)
          let eventHandler = () => {
            this.visible = false
            console.log('document隐藏了popover')
            document.removeEventListener('click', eventHandler)
          }
          document.addEventListener('click', eventHandler)
        })
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

}

.content-wrapper {
  position: absolute;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-100%);
}
</style>