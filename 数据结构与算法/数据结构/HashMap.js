// 两种方法解决冲突，链地址法或者开放地址法
// 链地址法是用在冲突的地方以链表的形式存储数据
// 开放地址法是在，有冲突就重新寻找地方---线性探测 二次探测 再哈希法

const hashFunc = require('./HashFunction')

class hashMap {
  constructor(){
    this.storage = []
    this.count = 0
    this.limit = 7   //初始hashmap长度
    // loadFactor > 0.75 的时候扩容
    // loadFactor < 0.25 的时候减少容量
  }

  set(key, value){
    // 1. 根据key来获取对应的index
    var index = hashFunc(key, this.limit)
    // 2. 根据index取出对应的bucket
    var bucket = this.storage[index]
    // 3. 判断该bucket是否为null
    if(bucket === null){
      bucket = []
      this.storage[index] = bucket
    }else{   //4. 不为空的话判断是不是修改数据
      for(let i = 0;i < bucket.length;i++){
        let tuple = bucket[i]
        if(tuple[0] === key){
          tuple[1] = value
          return
        }
      }
    }

    //5.是添加操作
    bucket.push([key, value])
    this.count ++
  }

  
}

