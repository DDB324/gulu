<template>
  <div class="popover" @click="onClick" ref="popover">
    <div ref="contentWrapper" class="content-wrapper"
         v-if="visible">
      <slot name="content"></slot>
    </div>
    <span ref="triggerWrapper" style="display: inline-block">
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
    positionContent() {
      document.body.appendChild(this.$refs.contentWrapper)
      let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
      this.$refs.contentWrapper.style.top = top + scrollY + 'px'
      this.$refs.contentWrapper.style.left = left + scrollX + 'px'
    },
    onClickDocument(e) {
      if (this.$refs.popover &&
          (this.$refs.popover === e.target ||
              this.$refs.popover.contains(e.target))) {
        return
      }
      if (this.$refs.contentWrapper &&
          (this.$refs.contentWrapper === e.target ||
              this.$refs.contentWrapper.contains(e.target))) {
        return
      }
      this.close()
    },
    open() {
      this.visible = true
      this.$nextTick(() => {
        document.addEventListener('click', this.onClickDocument)
        this.positionContent()
      })
    },
    close() {
      this.visible = false
      document.removeEventListener('click', this.onClickDocument)
    },
    onClick(event) {
      if (this.$refs.triggerWrapper.contains(event.target)) {
        if (this.visible === false) {
          this.open()
        } else {
          this.close()
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$border-color: #333;
$border-radius: 4px;
.popover {
  display: inline-block;
  vertical-align: top;
  position: relative;
}

.content-wrapper {
  position: absolute;
  filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
  transform: translateY(-100%);
  border: 1px solid $border-color;
  border-radius: $border-radius;
  background: white;
  padding: .5em 1em;
  margin-top: -10px;
  max-width: 20em;
  word-break: break-all;

  &::before, &::after {
    content: '';
    display: block;
    border: 10px solid transparent;
    position: absolute;
  }

  &::before {
    border-top-color: black;
    top: 100%;
  }

  &::after {
    border-top-color: white;
    top: calc(100% - 1px)
  }
}
</style>