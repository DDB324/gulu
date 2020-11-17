<template>
  <div>
    <p><strong>预览</strong></p>
    <d-button-group>
      <d-button icon="back">上一页</d-button>
      <d-button >更多</d-button>
      <d-button icon="next" icon-position="right">下一页</d-button>
    </d-button-group>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/Button/Button'
import ButtonGroup from "../../../src/Button/Button-group";

export default {
  components: {
    'd-button': Button,
    'd-button-group': ButtonGroup,
  },
  data() {
    return {
      content: `
    <d-button-group>
      <d-button icon="back">上一页</d-button>
      <d-button >更多</d-button>
      <d-button icon="next" icon-position="right">下一页</d-button>
    </d-button-group>
`.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>