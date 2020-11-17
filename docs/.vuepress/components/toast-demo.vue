<template>
  <div>
    <p><strong>预览</strong></p>
    <d-button @click="$toast('弹出的提示')">点击后在上方弹出提示</d-button>
    <d-button @click="$toast('弹出的提示',{position:'middle'})">点击后在中央弹出提示</d-button>
    <d-button @click="$toast('弹出的提示',{position:'bottom'})">点击后在下方弹出提示</d-button>
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
    <d-button @click="$toast('弹出的提示')">点击后在上方弹出提示</d-button>
    <d-button @click="$toast('弹出的提示',{position:'middle'})">点击后在中央弹出提示</d-button>
    <d-button @click="$toast('弹出的提示',{position:'bottom'})">点击后在下方弹出提示</d-button>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  },
}
</script>

