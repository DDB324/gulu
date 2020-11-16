<template>
  <div class="wrapper gulu-toast" :class="toastStyle">
    <div class="toast" ref="toast">
      <div class="message">
        <slot v-if="!enableHtml"></slot>
        <div v-else v-html="$slots.default[0]"></div>
      </div>
      <template v-if="closeButton">
        <div ref="line" class="line"></div>
        <span class="close" @click="onClickClose">
        {{ closeButton.text }}
      </span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuluToast',
  props: {
    autoClose: {
      type: [Boolean, Number],
      default: 5,
      validator(value) {
        return value === false || typeof value === 'number';
      }
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
        }, this.autoClose * 1000)
      }
    },
    updateStyle() {
      this.$nextTick(() => {
        this.$refs.line.style.height =
            this.$refs.toast.getBoundingClientRect().height
            + 'px';
      })
    },
    close() {
      this.$el.remove()
      this.$emit('close')
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
$animation-duration: 1s;
@keyframes slide-up {
  0% {opacity: 0;transform: translateY(100%)}
  100% {opacity: 1;transform: translateY(0)}
}

@keyframes slide-down {
  0% {opacity: 0;transform: translateY(-100%)}
  100% {opacity: 1;transform: translateY(0)}
}

@keyframes fade-in {
  0% {opacity: 0}
  100% {opacity: 1}
}

.wrapper {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  &.position-top {
    top: 0;

    .toast {
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      animation: slide-down $animation-duration;
    }
  }

  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);

    .toast {
      animation: fade-in $animation-duration;
      border-radius: 4px;
    }
  }

  &.position-bottom {
    bottom: 0;

    .toast {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      animation: slide-up $animation-duration;
    }
  }

  .toast {
    font-size: $font-size;
    line-height: $line-height;
    min-height: $toast-min-height;
    padding: 0 16px;
    display: flex;
    align-items: center;
    background: $toast-bg;
    color: $toast-color;
    box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);

    .message {padding: 8px 0;}

    .line {border-left: 1px solid white;margin-left: 16px;}

    .close {padding-left: 16px;flex-shrink: 0;}
  }
}


</style>