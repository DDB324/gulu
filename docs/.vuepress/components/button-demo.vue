<template>
  <div>
    <p><strong>预览</strong></p>
    <d-button class="demoButton">默认按钮</d-button>
    <d-button class="demoButton" icon="settings">icon在左边按钮</d-button>
    <d-button class="demoButton" icon="settings" icon-position="right">icon在右边按钮</d-button>
    <d-button class="demoButton" loading>loading按钮</d-button>
    <d-button class="demoButton" disabled>禁用按钮</d-button>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/Button/Button'

export default {
  components: {
    'd-button': Button,
  },
  data() {
    return {
      content: `
        <d-button>默认按钮</d-button>
        <d-button icon="settings">icon在左边按钮</d-button>
        <d-button icon="settings" icon-position="right">icon在右边按钮</d-button>
        <d-button loading>loading按钮</d-button>
        <d-button disabled>禁用按钮</d-button>
`.replace(/ {8}(?! )/g, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
.demoButton{
  margin:5px;
}
</style>