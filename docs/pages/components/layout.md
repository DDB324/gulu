# Layout 布局
协助进行页面级整体布局。

## 组件概述
- <span style='color:#3eaf7c;background-color:#F8F8F8'> d-layout </span>：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> d-header </span>：顶部布局，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> d-sider </span>：侧边栏，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> d-content </span>：内容部分，其下可嵌套任何元素，只能放在 Layout 中。

- <span style='color:#3eaf7c;background-color:#F8F8F8'> d-footer </span>：底部布局，其下可嵌套任何元素，只能放在 Layout 中。

## 普通布局

<ClientOnly> 
<layout-demo></layout-demo>
</ClientOnly>

## 有sider在内部

<ClientOnly> 
<layout-siderInside-demo></layout-siderInside-demo>
</ClientOnly>

## 有sider在外部

<ClientOnly> 
<layout-siderOutside-demo></layout-siderOutside-demo>
</ClientOnly>