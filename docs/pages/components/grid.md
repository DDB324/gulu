# Grid 格栅

## 设置col组件的属性

### span属性
栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。通过设置<span style='color:#3eaf7c;background-color:#F8F8F8'> span </span>属性来实现。
例如：三个等宽的列可以使用`<d-col span="8">列</d-col>` 来创建其中一个，其余两个再复制两份。

<ClientOnly> 
<grid-demo></grid-demo>
</ClientOnly>

### offset属性
使用<span style='color:#3eaf7c;background-color:#F8F8F8'> offset </span>属性,可以将列向右侧偏。  
例如，`offset="4"` 将元素向右侧偏移了 4 个列（column）的宽度。

<ClientOnly> 
<grid-offset-demo></grid-offset-demo>
</ClientOnly>

#### 响应式
支持iPad 、narrowPc 、pc 、widePc 四种设备的响应式设置。  
若不给 Col 这四个属性，默认为 手机端响应，span值为24。  
<span style='color:red;'>注意： 若设置这四个属性，则需要对应属性 + offset 的值的和为24，具体看代码。</span>  

<ClientOnly>
<grid-responsive-demo></grid-responsive-demo>
</ClientOnly>


## 设置row组件的属性

### gutter属性
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> gutter </span>属性, 可以让栅格有间隔。单位为<span style='color:#3eaf7c;background-color:#F8F8F8'> px </span>。    

<ClientOnly> 
<grid-gutter-demo></grid-gutter-demo>
</ClientOnly>

### align属性
通过给 Row 设置<span style='color:#3eaf7c;background-color:#F8F8F8'> align </span>属性, 可以定义其子组件在该节点里面的排版方式。  

<ClientOnly> 
<grid-align-demo></grid-align-demo>
</ClientOnly>



