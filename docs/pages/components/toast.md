# Toast 弹出提示框

## this.$toast
#### z-index:若你的项目不可见 Toast 组件，尝试传入一个 z-index 试试。
#### autoClose:此选项默认设定 Toast 自动关闭的延时。单位为“ 秒 ”，默认延时 5 秒后自动关闭。
#### position:可以设定 Toast 弹出的位置 ，支持 top, middle, bottom 三个值。
<ClientOnly> 
<toast-demo></toast-demo>
</ClientOnly>

## 设置关闭按钮
Toast 组件的右侧按钮文本可编辑，并且支持传入一个回调。 closeButton 选项接收一个对象。对象包括 text 与 callback 属性。用于设定按钮的文本与回调。

<ClientOnly> 
<toast-closeButton-demo></toast-closeButton-demo>
</ClientOnly>

## 支持HTML
Toast 组件还支持 HTML 语法，该功能默认关闭，你需要传递一个 enableHTML 参数来开启它。 开启后就可以在 Toast 内容区域写 HTML 语法。

<ClientOnly> 
<toast-html-demo></toast-html-demo>
</ClientOnly>