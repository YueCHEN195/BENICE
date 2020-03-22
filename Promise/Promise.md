# promise 详解

## 1 基本概念

Promise是一个封装异步操作的对象，主要用来解决异步操作的执行顺序的问题，在没有promise的时候，要想顺序执行异步操作，不可避免的要使用回调函数嵌套（callback hell）
Promise实例生成的时候，传入的函数会被立即执行
Promise的三种状态：resolved，rejected，pending

``` javaScript
function getFileByPath(fpath) {

  return new Promise(function (resolve, reject) {
    fs.readFile(fpath, 'utf-8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}
```

resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从 pending 变为resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；
reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从 pending 变为rejected）， 在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

## 2 有关then

Promise实例生成以后，可以用then方法分别指定resolved状态和rejected状态的回调函数

then方法接受两个回调函数作为参数，分别对应成功和失败的回调函数

then方法会返回一个新的Promise实例

这个promise实例会根据then中回调函数的返回值的情况而有所不同：

1. then中return的是一个值（包括没有return，返回的是undefined），或者是一个非thenable的对象
此时返回的promise会成为resolved状态，return的值会作为下一个then的成功回调函数的参数

2. throw error
此时返回的promise的会变为rejected状态，执行下一个then中的失败回调函数，如果没有，会被catch
其实catch是then的语法糖，相当于`then(null, rejection)`
也就是说，catch也是then，它用于捕获错误，它的参数也就是是then的第二个参数。
所以，catch也是会返回一个promise状态的

3. return一个Promise

这就没什么好说的，执行这个promise结果会被下一个then接收，需要注意的是可以返回Promise.resove() 或者 Promise.reject() 来达到向下一个then传参的目的，axios的拦截器中有用到。

