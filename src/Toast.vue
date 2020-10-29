<template>
  <div class="toast" :class="toastStyle" ref="wrapper">
    <div class="message">
      <slot v-if="!enableHtml"></slot>
      <div v-else v-html="$slots.default[0]"></div>
    </div>
    <template v-if="closeButton.callback">
      <div ref="line" class="line"></div>
      <span class="close" @click="onClickClose">
        {{ closeButton.text }}
      </span>
    </template>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: Boolean,
      default: true,
    },
    autoCloseDelay: {
      type: Number,
      default: 1,
    },
    closeButton: {
      type: Object,
      default() {
        return {text: '关闭', callback: undefined,}
      }
    },
    enableHtml: {
      type: Boolean,
      default() {
        return false;
      }
    },
    position: {
      type: String,
      default: 'top',
      validator(value) {
        return ['middle', 'top', 'bottom'].indexOf(value) >= 0
      }
    }
  },
  mounted() {
    this.updateStyle()
    this.execAutoClose()
  },
  computed: {
    toastStyle() {
      let {position} = this
      return [position && `position-${position}`]
    }
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close()
        }, this.autoCloseDelay * 1000)
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            this.$refs.wrapper.getBoundingClientRect().height
            + 'px';
      })
    },
    close() {
      this.$el.remove()
      this.$destroy()
    },
    onClickClose() {
      if (this.closeButton && typeof this.closeButton.callback === 'function') {
        this.closeButton.callback(this)
      }
      this.close()
    }
  }
}
</script>

<style lang="scss" scoped>
$font-size: 14px;
$line-height: 1.8;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$toast-color: white;
.toast {
  position: fixed;left: 50%;
  font-size: $font-size;line-height: $line-height;min-height: $toast-min-height;
  padding: 0 16px;display: flex;align-items: center;background: $toast-bg;
  color: $toast-color;border-radius: 4px;box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

  &.position-top {top: 0;transform: translateX(-50%);}

  &.position-middle {top: 50%;transform: translate(-50%, -50%);}

  &.position-bottom {bottom: 0;transform: translateX(-50%);}

  .message {padding: 8px 0;}

  .line {border-left: 1px solid white;margin-left: 16px;}

  .close {padding-left: 16px;flex-shrink: 0;}
}
</style>