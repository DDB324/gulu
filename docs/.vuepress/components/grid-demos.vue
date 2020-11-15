<template>
  <div>
    <p>预览</p>
    <g-row gutter="2">
      <g-col span="12"></g-col>
      <g-col span="10" offset="2"></g-col>
    </g-row>
  </div>
  <p>代码</p>
  <pre><code>{{ content }}</code></pre>
</template>
<script>
import Row from '../../../src/Row'
import Col from '../../../src/Col'

export default {
  components: {
    'g-row': Row,
    'g-col': Col,
  },
  data() {
    return {
      content:`
       <g-row gutter="2">
      <g-col span="12"></g-col>
      <g-col span="10" offset="2"></g-col>
    </g-row>
      `.replace(/  +/g, '').trim(),
    }
  }
}
</script>