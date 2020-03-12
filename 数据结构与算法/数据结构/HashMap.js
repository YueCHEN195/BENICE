// 两种方法解决冲突，链地址法或者开放地址法
// 链地址法是用在冲突的地方以链表的形式存储数据
// 开放地址法是在，有冲突就重新寻找地方---线性探测 二次探测 再哈希法
const hashFunc = require('./HashFunction')
const Prime = require('./Prime')


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
    let index = hashFunc(key, this.limit)
    // 2. 根据index取出对应的bucket
    let bucket = this.storage[index]
    // 3. 判断该bucket是否为null
    if(bucket === undefined){
      bucket = []
      this.storage[index] = bucket
    }else{   //4. 不为空的话判断是不是修改数据
      for(let i = 0;i < bucket.length;i++){
        let tuple = bucket[i]
        if(tuple[0] == key){
          tuple[1] = value
          return tuple[1]
        }
      }
    }
    //5.是添加操作
    bucket.push([key, value])
    this.count ++

    // 6.判断是否需要扩容

    if(this.count > this.limit * 0.75){
      this.resize(this.limit * 2)
    }
  }

  get(key){
    let index = hashFunc(key, this.limit)
    let bucket = this.storage[index]
    if(bucket === undefined){
      return undefined
    } else {
      for(let item of bucket){
        if(item[0] == key){
          return item[1]
        }
      }
      return undefined
    }
  }
  
  remove(key){
    let index = hashFunc(key,this.limit)
    let bucket = this.storage[index]
    if(bucket === undefined){
      return undefined
    } else {
      for(let i = 0;i < bucket.length;i++){
        let tuple = bucket[i]
        if(tuple[0] == key){
          bucket.splice(i, 1)
          this.count --
          if(this.limit > 7 && this.count < this.limit * 0.25){
            this.resize(Math.floor(this.limit / 2))
          }
          return tuple[1]
        }
      }
      return undefined
    }
  }

  isEmpty(){
    return this.count === 0
  }

  size(){
    return this.count
  }

  resize(newLimit){
    let oldStorage = this.storage

    this.storage = []
    this.count = 0
    this.limit = newLimit

    for(let bucket of oldStorage){
      // bucket 有数据
      if(bucket){
        for(let item of bucket){
          this.set(item[0],item[1])
        }
      }
    }
  }
}

module.exports = hashMap