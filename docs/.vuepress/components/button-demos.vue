<template>
  <div>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">icon在左边按钮</g-button>
    <g-button icon="settings" icon-position="right">icon在右边按钮</g-button>
    <g-button loading>loading按钮</g-button>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Button from '../../../src/Button'

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
`


    }
  }
}
</script>