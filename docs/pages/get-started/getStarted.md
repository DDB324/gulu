# 快速上手

## 引入必要资源
```javascript
import {Button} from "duoduo-ui-demo";
import "duoduo-ui-demo/dist/index.css";
```

## 注册组件
```javascript
export default {
  name: "ComponentName",
  components: {
    "d-button": Button,
  },
}
```

## 使用
代码：
```vue
<template>
  <div>
    <d-button>默认按钮</d-button>
  </div>
</template>
```
效果：
<ClientOnly>
<button-get-started-demo></button-get-started-demo>
</ClientOnly>
