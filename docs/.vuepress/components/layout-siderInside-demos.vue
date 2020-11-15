<template>
  <div>
    <p><strong>预览</strong></p>
    <g-layout class="demoLayout">
      <g-header>
        <div class="demoHeader">Header</div>
      </g-header>
      <g-layout>
        <g-sider>
          <div class="demoSider">Sider</div>
        </g-sider>
        <g-content>
          <div class="demoContent">Content</div>
        </g-content>
      </g-layout>
      <g-footer>
        <div class="demoFooter">Footer</div>
      </g-footer>
    </g-layout>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>
<script>
import Layout from '../../../src/Layout/Layout'
import Header from '../../../src/Layout/Header'
import Content from '../../../src/Layout/Content'
import Footer from '../../../src/Layout/Footer'
import Sider from '../../../src/Layout/Sider'

export default {
  components: {
    'g-layout': Layout,
    'g-header': Header,
    'g-footer': Footer,
    'g-content': Content,
    'g-sider': Sider,
  },
  data() {
    return {
      content: `
      <g-layout class="demoLayout">
      <g-header>
        <div class="demoHeader">Header</div>
      </g-header>
      <g-content>
        <div class="demoContent">Content</div>
      </g-content>
      <g-footer>
        <div class="demoFooter">Footer</div>
      </g-footer>
    </g-layout>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>
<style lang="scss" scoped>
%display {
  display: flex;
  justify-content: center;
  align-items: center;
}

* {
  box-sizing: border-box;
}

.demoLayout {

  .demoHeader {
    height: 60px;
    background: #ccc;
    @extend %display
  }

  .demoContent {
    height: 120px;
    background: #eee;
    @extend %display
  }

  .demoSider {
    height:100%;
    width: 200px;
    background: #ddd;
    @extend %display
  }

  .demoFooter {
    height: 60px;
    background: #ccc;
    @extend %display
  }
}

</style>