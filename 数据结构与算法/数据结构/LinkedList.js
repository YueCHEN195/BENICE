class Node{
  constructor(value){
    this.value = value
    this.next = null
  }
}


class LinkedList {
  constructor(){
    this.head = null
    this.length = 0
  }

  append(value){           //在末尾添加一个元素
    let newNode = new Node(value)
    if(this.length === 0){
      this.head = newNode
    }else{
      let current = this.head
      while(current.next){
        current = current.next
      }
      current.next = newNode
    }
    this.length++       //记得改变length  不然只能加第一个
  }

  toString(){
    let current = this.head
    let res = ''
    while(current){
      if(current.next === null){
        res += current.value
      }else{
        res += current.value + '->'
      }
      current = current.next
    }
    return res
  }
  
  insert(position, value){
    if(position < 0 || position > this.length){
      throw new error('the position is not valid')
    }
    let newNode = new Node(value)
    if(position == 0){
      newNode.next = this.head
      this.head = newNode
    } else {
      let index = 0
      let current = this.head
      let previous = null
      while(index < position){
        previous = current
        current = current.next
        index++
      }
      newNode.next = current
      previous.next = newNode
    }
    this.length++
    return true
  }

  get(position){
    if(position < 0 || position >= this.length){
      return null
    }else{
      let current = this.head
      let index = 0
      while(index < position){
        current = current.next
        index++
      }
      return current.value
    }
  }

  indexOf(value){
    let current = this.head
    let index = 0
    while(current){
      if(current.value === value){
        return index
      }else{
        current = current.next
        index ++
      }
    }
    return -1
  }

  update(position, value){
    if(position < 0 || position >= this.length){
      throw new error('this position is not valid')
    }
    let current = this.head
    let index = 0
    while(index < position){
      current = current.next
      index ++
    }
    current.value = value
  }

  removeAt(position){
    if(position < 0 || position >= this.length){
      throw new error('the position is not valid')
    }
    let current = this.head
    let index = 0
    let previous = null
    if(position === 0){
      this.head = this.head.next
    }else{
      while(index < position){
        previous = current
        current = current.next
        index ++
      }
      previous.next = current.next
    }
    this.length -- //记得修改长度
    return current.value
  }

  remove(value){
    let current = this.head
    let previous = null
    if(current.value === value){
      this.head = this.head.next
    }else{
      while(current){
        previous = current
        current = current.next
        if(current.value === value){
          previous.next = current.next
          break
        }
      }
      this.length --
      return current.value
    }
  }

  isEmpty(){
    return this.length === 0
  }

  size(){
    return this.length
  }

}


// test
// let test = new LinkedList()
// test.append('1')
// test.append('2')
// test.append('3')
// test.append('4')
// test.append('5')
// test.insert(3,'a')
// test.update(3,'b')

// console.log(test.toString())

// console.log(test.remove('b'))

// console.log(test.toString())



module.exports = LinkedList