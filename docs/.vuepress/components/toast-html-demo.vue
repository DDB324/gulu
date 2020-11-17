<template>
  <div>
    <p><strong>预览</strong></p>
    <d-button @click="onClickButton">点击后在上方弹出HTML提示</d-button>
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
    'd-toast': Toast,
    'd-button': Button
  },
  data() {
    return {
      content: `
    <d-button @click="onClickButton">点击后在上方弹出HTML提示</d-button>

    methods: {
      onClickButton() {
        this.$toast('<strong>加粗的提示</strong>', {
          enableHtml: true
        })
      }
    }
      `.replace(/ {4}(?! )/g, '').trim()
    }
  },
  methods: {
    onClickButton() {
      this.$toast('<strong>加粗的提示</strong>', {
        enableHtml: true
      })
    }
  }
}
</script>

