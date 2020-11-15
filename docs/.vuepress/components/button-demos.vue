<template>
  <div>
    <p><strong>预览</strong></p>
    <p><g-button>默认按钮</g-button></p>
    <p><g-button icon="settings">icon在左边按钮</g-button></p>
    <p><g-button icon="settings" icon-position="right">icon在右边按钮</g-button></p>
    <p><g-button loading>loading按钮</g-button></p>
    <p><g-button disabled>禁用按钮</g-button></p>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/Button/Button'

export default {
  components: {
    'g-button': Button,
  },
  data() {
    return {
      content: `
        <g-button>默认按钮</g-button>
        <g-button icon="settings">icon在左边按钮</g-button>
        <g-button icon="settings" icon-position="right">icon在右边按钮</g-button>
        <g-button loading>loading按钮</g-button>
        <g-button disabled>禁用按钮</g-button>
`.replace(/  +/g, '').trim()
    }
  }
}
</script>