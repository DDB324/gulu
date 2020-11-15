<template>
  <div>
    <p><strong>预览</strong></p>
    <g-row class="demoRow" gutter="20" align="left">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="20" align="center">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="20" align="right">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
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
      content: `
      * {
          box-sizing: border-box;
      }

    <g-row class="demoRow" gutter="20" align="left">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="20" align="center">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
    <g-row class="demoRow" gutter="20" align="right">
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
      <g-col span="4">
        <div class="demoCol">4</div>
      </g-col>
    </g-row>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>
<style lang="scss" scoped>
* {
  box-sizing: border-box;
}

.demoRow {
  margin: 10px 0;

  .demoCol {
    border: 1px solid #ccc;
    height: 50px;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }

}

</style>