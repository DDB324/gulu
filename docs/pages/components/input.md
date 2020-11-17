# Input 输入框
通过鼠标或键盘输入内容，是最基础的表单域的包装。
## 简单用法

<ClientOnly> 
<input-demo></input-demo>
</ClientOnly>

### input的三种状态

#### 1. disabled
表示是否禁用状态，默认为 false，禁用。
#### 2. readonly
表示只读状态， 与 disabled 相似。但是 disabled 不可以被 Tab 键选中，<span style='color:#3eaf7c;background-color:#F8F8F8'>readonly</span> 可以被选中，不能修改。
#### 3. error
给 Input 添加 <span style='color:#3eaf7c;background-color:#F8F8F8'>error</span> 属性，会在该 input 右侧显示一个提示图标与文字，用于提示。


## 双向绑定

<ClientOnly> 
<input-v-model-demo></input-v-model-demo>
</ClientOnly>