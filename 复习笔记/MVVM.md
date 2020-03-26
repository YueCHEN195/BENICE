# Vue 响应式原理及MVVM框架

## 什么是MVVM

所有实现了数据驱动视图更新的框架，都被称之为MVVM框架

## vue 实现响应式的原理

Vue是基于 Object.defineProperty 来实现数据响应的，Vue数据响应式变化主要涉及 Observer, Watcher , Dep 这三个主要的类，我先来说一下observer，在Vue的组件初始化的时候，在`observer`类的构造函数中，会对data的所有的属性调用`defineReative`，其内部调用Object.defineProperty，并且对每个属性生成一个 dep 对象，设置data中每一个属性的reactiveGetter，reactiveSetter。在getter中，会进行依赖收集`dep.depend()`，在setter中进行发布更新`dep.notify()` 
当Vue组件被初始化的时候会创建一个watcher对象与之对应，这个对象被创建的时候会调用页面的updata方法，这个方法会访问data的



1. 任何一个 Vue Component 都有一个与之对应的 Watcher 实例。
2. Vue 的 data 上的属性会被添加 getter 和 setter 属性。
3. 当 Vue Component render 函数被执行的时候, data 上会被 触碰(touch), 即被读, getter 方法会被调用, 此时 Vue 会去记录此 Vue component 所依赖的所有 data。(这一过程被称为依赖收集)
4. data 被改动时（主要是用户操作）, 即被写, setter 方法会被调用, 此时 Vue 会去通知所有依赖于此 data 的组件去调用他们的 render 函数进行更新。