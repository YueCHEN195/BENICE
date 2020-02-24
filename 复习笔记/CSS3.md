# 1 css3

## 1 动画

`transition: width 2s ease 3s` 和 `transform: rotate(30deg) translate() scale() skew` 配合使用
最后一个时间为动画延迟时间
animation 是当属性应用于这个元素之上的时候就执行，transition是
`animation: name 2s ease 3s` 配合 `@keyframe name{0%{style}%100{style}}`

## 2 弹性盒模型

父元素：`display:flex;`
`flex-direction: row|row-reverse|column|column-reverse|` 主轴方向
`align-items:flex-start|flex-end|center|baseline|stretch(default)` 沿着副轴怎么对齐
`justify-content: flex-start|flex-end|center|space-between|space-around|` 沿着主轴怎么对齐

## 3 水平垂直居中的几个办法

1.弹性布局：`display:flex; align-items:center; justify-content:center` 
2.绝对定位：`position:relative;position:absolute;top:50% left:50% translate(-50%,-50%)`
3.单元格来实现：`display:table-cell;vertical-align:middle;text-align:center; display:inline-block`

## 4 响应式有哪些方式

响应式布局的核心是通过媒介查询设置样式，这样就可以为不同分辨率的屏幕单独设计样式。

``` css

@media screen and (max-width: 980px){
  #header{...}
  #content{...}
  #footer{...}
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {}

@media only screen and (min-width: 320px) and (max-width: 767px) {}

```
弹性盒模型
rem,em
百分比布局
rem单位都是相对于根元素html的font-size来决定大小的，根元素的font-size相当于提供了一个基准，当页面的size发生变化时，只需要改变font-size的值，那么以rem为固定单位的元素的大小也会发生响应的变化。
css3中引入了一个新的单位vw/vh，与视图窗口有关。vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度。

