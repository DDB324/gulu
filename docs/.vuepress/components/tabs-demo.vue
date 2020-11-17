<template>
  <div>
    <p><strong>预览</strong></p>
    <d-tabs selected="news">
      <d-tabs-head>
        <d-tabs-item name="news">新闻</d-tabs-item>
        <d-tabs-item name="videos">视频</d-tabs-item>
        <d-tabs-item name="pictures">图片</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="news">新闻的资讯</d-tabs-pane>
        <d-tabs-pane name="videos">视频的资讯</d-tabs-pane>
        <d-tabs-pane name="pictures">图片的资讯</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
    <p><strong>代码</strong></p>
    <pre><code>{{ content }}</code></pre>
  </div>
</template>

<script>
import Tabs from "../../../src/Tabs/Tabs";
import TabsBody from "../../../src/Tabs/Tabs-body";
import TabsHead from "../../../src/Tabs/Tabs-head";
import TabsItem from "../../../src/Tabs/Tabs-item";
import TabsPane from "../../../src/Tabs/Tabs-pane";

export default {
  components: {
    'd-tabs': Tabs,
    'd-tabs-body': TabsBody,
    'd-tabs-head': TabsHead,
    'd-tabs-item': TabsItem,
    'd-tabs-pane': TabsPane,
  },
  data() {
    return {
      content: `
     <d-tabs selected="news">
      <d-tabs-head>
        <d-tabs-item name="news">新闻</d-tabs-item>
        <d-tabs-item name="videos">视频</d-tabs-item>
        <d-tabs-item name="pictures">图片</d-tabs-item>
      </d-tabs-head>
      <d-tabs-body>
        <d-tabs-pane name="news">新闻的资讯</d-tabs-pane>
        <d-tabs-pane name="videos">视频的资讯</d-tabs-pane>
        <d-tabs-pane name="pictures">图片的资讯</d-tabs-pane>
      </d-tabs-body>
    </d-tabs>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
*{
}
</style>