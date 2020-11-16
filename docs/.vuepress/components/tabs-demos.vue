<template>
  <div>
    <p><strong>预览</strong></p>
    <g-tabs selected="news">
      <g-tabs-head>
        <g-tabs-item name="news">新闻</g-tabs-item>
        <g-tabs-item name="videos">视频</g-tabs-item>
        <g-tabs-item name="pictures">图片</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="news">新闻的资讯</g-tabs-pane>
        <g-tabs-pane name="videos">视频的资讯</g-tabs-pane>
        <g-tabs-pane name="pictures">图片的资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
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
    'g-tabs': Tabs,
    'g-tabs-body': TabsBody,
    'g-tabs-head': TabsHead,
    'g-tabs-item': TabsItem,
    'g-tabs-pane': TabsPane,
  },
  data() {
    return {
      content: `
     <g-tabs selected="news">
      <g-tabs-head>
        <g-tabs-item name="news">新闻</g-tabs-item>
        <g-tabs-item name="videos">视频</g-tabs-item>
        <g-tabs-item name="pictures">图片</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="news">新闻的资讯</g-tabs-pane>
        <g-tabs-pane name="videos">视频的资讯</g-tabs-pane>
        <g-tabs-pane name="pictures">图片的资讯</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
      `.replace(/ {4}(?! )/g, '').trim()
    }
  }
}
</script>

<style lang="scss" scoped>
*{
}
</style>