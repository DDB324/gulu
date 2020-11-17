<template>
  <div>
    <p><strong>预览</strong></p>
    <d-row class="demoRow" gutter="10">
      <d-col span="8">
        <div class="demoCol">span-8;gutter-10</div>
      </d-col>
      <d-col span="8">
        <div class="demoCol">span-8;gutter-10</div>
      </d-col>
      <d-col span="8">
        <div class="demoCol">span-8;gutter-10</div>
      </d-col>
    </d-row>
    <d-row class="demoRow" gutter="20">
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
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

      .demoCol {
        border: 1px solid #ccc;
        height: 50px;
        background: #eee;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    <d-row class="demoRow" gutter="10">
      <d-col span="8">
        <div class="demoCol">span-8;gutter-10</div>
      </d-col>
      <d-col span="8">
        <div class="demoCol">span-8;gutter-10</div>
      </d-col>
      <d-col span="8">
        <div class="demoCol">span-8;gutter-10</div>
      </d-col>
    </d-row>

    <d-row class="demoRow" gutter="20">
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
      </d-col>
      <d-col span="6">
        <div class="demoCol">span-6;gutter-20</div>
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