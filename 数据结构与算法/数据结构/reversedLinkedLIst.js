const linkedList = require('./LinkedList')

function reverse(head){
  let pre = null
  let pro = head.next
  while(pro!==null){
    head.next = pre
    pre = head
    head = pro
    pro = pro.next
  }
  head.next = pre //处理一下最后一个元素
  return head
}

var list = new linkedList()
list.append('1')
list.append('2')
list.append('3')
list.append('4')
list.append('5')
list.append('6')
console.log(list.toString())
list.head = reverse(list.head)  //得覆盖一下list.head 不然list.head的指向还是没改
console.log(list.toString())
