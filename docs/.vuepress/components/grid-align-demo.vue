<template>
  <div>
    <p><strong>预览</strong></p>
    <d-row class="demoRow" align="left">
      <d-col span="4">
        <div class="demoCol">left;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">left;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">left;span-4</div>
      </d-col>
    </d-row>
    <d-row class="demoRow" align="center">
      <d-col span="4">
        <div class="demoCol">center;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">center;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">center;span-4</div>
      </d-col>
    </d-row>
    <d-row class="demoRow" align="right">
      <d-col span="4">
        <div class="demoCol">right;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">right;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">right;span-4</div>
      </d-col>
    </d-row>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Row from '../../../src/Grid/Row'
import Col from '../../../src/Grid/Col'

export default {
  components: {
    'd-row': Row,
    'd-col': Col,
  },
  data() {
    return {
      content: `
      * {
          box-sizing: border-box;
      }

      .demoRow {
        margin: 10px 0;
        border:1px solid #666;

        .demoCol {
          border: 1px solid #ccc;
          height: 50px;
          background: #eee;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

    <d-row class="demoRow" align="left">
      <d-col span="4">
        <div class="demoCol">left;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">left;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">left;span-4</div>
      </d-col>
    </d-row>

    <d-row class="demoRow" align="center">
      <d-col span="4">
        <div class="demoCol">center;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">center;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">center;span-4</div>
      </d-col>
    </d-row>

    <d-row class="demoRow" align="right">
      <d-col span="4">
        <div class="demoCol">right;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">right;span-4</div>
      </d-col>
      <d-col span="4">
        <div class="demoCol">right;span-4</div>
      </d-col>
    </d-row>
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
  border:1px solid #666;

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