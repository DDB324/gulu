<template>
  <div>
    <p><strong>预览</strong></p>
    <d-input v-model="value"></d-input>
    <div>{{value}}</div>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Input from '../../../src/Input/Input'

export default {
  components: {
    'd-input': Input,
  },
  data() {
    return {
      value: '双向绑定',
      content: `
    data() {
      return {
        value: '双向绑定',
      }
    }

    <d-input v-model="value"></d-input>
    <div>{{value}}</div>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>