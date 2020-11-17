<template>
  <div>
    <p><strong>预览</strong></p>
    <d-collapse :active-name="activeName">
      <d-collapse-item title="标题1" name="1">内容1</d-collapse-item>
      <d-collapse-item title="标题2" name="2">内容2</d-collapse-item>
      <d-collapse-item title="标题3" name="3">内容3</d-collapse-item>
    </d-collapse>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Collapse from "../../../src/Collapse/Collapse";
import CollapseItem from "../../../src/Collapse/Collapse-item";

export default {
  components: {
    'd-collapse': Collapse,
    'd-collapse-item': CollapseItem,
  },
  data() {
    return {
      activeName: ['1'],
      content: `
    data() {
      return {
        activeName: ['1'],
      }
    }

    <d-collapse :active-name="activeName">
      <d-collapse-item title="标题1" name="1">内容1</d-collapse-item>
      <d-collapse-item title="标题2" name="2">内容2</d-collapse-item>
      <d-collapse-item title="标题3" name="3">内容3</d-collapse-item>
    </d-collapse>
`.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>