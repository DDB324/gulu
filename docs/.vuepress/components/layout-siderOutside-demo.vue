<template>
  <div>
    <p><strong>预览</strong></p>
    <d-layout class="demoLayout">
      <d-sider>
        <div class="demoSider">Sider</div>
      </d-sider>
      <d-layout>
        <d-header>
          <div class="demoHeader">Header</div>
        </d-header>
        <d-content>
          <div class="demoContent">Content</div>
        </d-content>
        <d-footer>
          <div class="demoFooter">Footer</div>
        </d-footer>
      </d-layout>
    </d-layout>
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
    'd-layout': Layout,
    'd-header': Header,
    'd-footer': Footer,
    'd-content': Content,
    'd-sider': Sider,
  },
  data() {
    return {
      content: `
      <d-layout class="demoLayout">
      <d-sider>
        <div class="demoSider">Sider</div>
      </d-sider>
      <d-layout>
        <d-header>
          <div class="demoHeader">Header</div>
        </d-header>
        <d-content>
          <div class="demoContent">Content</div>
        </d-content>
        <d-footer>
          <div class="demoFooter">Footer</div>
        </d-footer>
      </d-layout>
    </d-layout>
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
    width: 200px;
    height:100%;
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