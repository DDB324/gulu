<template>
  <div>
    <p><strong>预览</strong></p>
    <g-button @click="onClickButton">
      点击后在上方弹出提示
    </g-button>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Toast from '../../../src/Toast/Toast'
import Vue from 'vue'
import plugin from "../../../src/plugin";
import Button from "../../../src/Button/Button";

Vue.use(plugin)
export default {
  components: {
    'g-toast': Toast,
    'g-button': Button
  },
  data() {
    return {
      content: `
    .gulu-toast {
      z-index: 30;
    }

    <g-button @click="onClickButton">点击后在上方弹出提示</g-button>

    methods: {
        onClickButton() {
          this.$toast('我是谁?', {
            closeButton: {
              text: '点击后触发回调函数',
              callback: () => {
                console.log('我是ddb');
              }
            }
          })
        }
      }
`.replace(/ {4}(?! )/g, '').trim()
    }
  },
  methods: {
    onClickButton() {
      this.$toast('我是谁?', {
        closeButton: {
          text: '点击后触发回调函数',
          callback: () => {
            console.log('我是ddb');
          }
        }
      })
    }
  }
}
</script>

<style lang="scss">
.gulu-toast {
  z-index: 30;
}
</style>