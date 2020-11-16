<template>
  <div>
    <p><strong>预览</strong></p>
    <g-popover>
      <template v-slot:content><strong>popover内容</strong></template>
      <g-button>上方弹出</g-button>
    </g-popover>
    <g-popover position="bottom">
      <template v-slot:content>popover内容</template>
      <g-button>下方弹出</g-button>
    </g-popover>
    <g-popover position="left">
      <template v-slot:content>popover内容</template>
      <g-button>左方弹出</g-button>
    </g-popover>
    <g-popover position="right">
      <template v-slot:content>popover内容</template>
      <g-button>右方弹出</g-button>
    </g-popover>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Popover from "../../../src/Popover/Popover";
import Button from "../../../src/Button/Button";

export default {
  components: {
    'g-popover': Popover,
    'g-button': Button
  },
  data() {
    return {
      content: `
    <g-popover>
      <template v-slot:content><strong>popover内容</strong></template>
      <g-button>上方弹出</g-button>
    </g-popover>

    <g-popover position="bottom">
      <template v-slot:content>popover内容</template>
      <g-button>下方弹出</g-button>
    </g-popover>

    <g-popover position="left">
      <template v-slot:content>popover内容</template>
      <g-button>左方弹出</g-button>
    </g-popover>

    <g-popover position="right">
      <template v-slot:content>popover内容</template>
      <g-button>右方弹出</g-button>
    </g-popover>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>