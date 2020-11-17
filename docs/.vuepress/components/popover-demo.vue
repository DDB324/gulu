<template>
  <div>
    <p><strong>预览</strong></p>
    <d-popover>
      <template v-slot:content><strong>popover内容</strong></template>
      <d-button>上方弹出</d-button>
    </d-popover>
    <d-popover position="bottom">
      <template v-slot:content>popover内容</template>
      <d-button>下方弹出</d-button>
    </d-popover>
    <d-popover position="left">
      <template v-slot:content>popover内容</template>
      <d-button>左方弹出</d-button>
    </d-popover>
    <d-popover position="right">
      <template v-slot:content>popover内容</template>
      <d-button>右方弹出</d-button>
    </d-popover>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Popover from "../../../src/Popover/Popover";
import Button from "../../../src/Button/Button";

export default {
  components: {
    'd-popover': Popover,
    'd-button': Button
  },
  data() {
    return {
      content: `
    <d-popover>
      <template v-slot:content><strong>popover内容</strong></template>
      <d-button>上方弹出</d-button>
    </d-popover>

    <d-popover position="bottom">
      <template v-slot:content>popover内容</template>
      <d-button>下方弹出</d-button>
    </d-popover>

    <d-popover position="left">
      <template v-slot:content>popover内容</template>
      <d-button>左方弹出</d-button>
    </d-popover>

    <d-popover position="right">
      <template v-slot:content>popover内容</template>
      <d-button>右方弹出</d-button>
    </d-popover>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>