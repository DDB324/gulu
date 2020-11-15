<template>
  <div>
    <p><strong>预览</strong></p>
    <p><g-input :value='value'></g-input></p>
    <p><g-input :value='value'></g-input></p>
    <p><g-input disabled :value="value"></g-input></p>
    <p><g-input read-only :value="value"></g-input></p>
    <p><g-input error="对不起,您的输入有错误"></g-input></p>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Input from '../../../src/Input'

export default {
  components: {
    'g-input': Input,
  },
  data() {
    return {
      value: '你好,我叫XXX',
      content: `
       <g-input :value='value'></g-input>
  <g-input disabled :value="value"></g-input>
  <g-input read-only :value="value"></g-input>
  <g-input error="对不起,您的输入有错误"></g-input>
      `.replace(/  +/g, '').trim()
    }
  }
}
</script>