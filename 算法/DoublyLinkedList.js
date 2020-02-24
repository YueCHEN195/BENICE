const LinkedList =  require('./LinkedList');
class Node {
  constructor(value){
    this.next = null
    this.prev = null
    this.value = value
  }
}

class DoublyLinkedList extends LinkedList{
  constructor(){
    super()
    this.tail = null
  }

  append(value){
    let newNode = new Node(value)
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    }else{
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length ++
  }
  
  toString(){
    let current = this.head
    let res = ''
    while(current){
      if(current.next === null){
        res += current.value
      }else{
        res += current.value + '<=>'
      }
      current = current.next
    }
    return res
  }

  insert(position, value){
    if(position < 0 || position > this.length){
      throw new error('position is not valid')
    }
    let newNode = new Node(value)
    if(this.length === 0){
      this.head = newNode
      this.tail = newNode
    }else {
      if(position === 0){
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
      }else if (position === this.length){
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode
      }else{
        let current = this.head
        let index = 0
        while(index < position){
          current = current.next
          index ++
        }
        newNode.next = current
        newNode.prev = current.prev
        current.prev.next = newNode
        current.prev = newNode
      }
    }
    this.length ++
  }
  // get() indexOf() update() isEmpty() size() 可以完全继承自父类

  
}



// var test = new DoublyLinkedList()
// test.append('1')
// test.append('2')
// test.append('3')
// test.append('4')
// test.insert(0,'a')
// test.insert(5,'b')
// test.insert(2,'c')
// console.log(test.toString())
// console.log(test.indexOf('1'))
// console.log(test.get(2))


module.exports = DoublyLinkedList