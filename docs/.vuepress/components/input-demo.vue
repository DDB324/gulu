<template>
  <div>
    <p><strong>预览</strong></p>
    <d-input class="demoInput" value='你好,我叫XXX'></d-input>
    <d-input class="demoInput" disabled value="你好,我叫XXX"></d-input>
    <d-input class="demoInput" read-only value="你好,我叫XXX"></d-input>
    <d-input class="demoInput" error="对不起,您的输入有错误"></d-input>
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
      value: '你好,我叫XXX',
      content: `
    <d-input value='你好,我叫XXX'></d-input>
    <d-input disabled value="你好,我叫XXX"></d-input>
    <d-input read-only value="你好,我叫XXX"></d-input>
    <d-input error="对不起,您的输入有错误"></d-input>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
.demoInput{
  padding: 10px 0;
}
</style>