function ListNode(x){
    this.val = x;
    this.next = null;
}


function ReverseList(pHead)
{
    // write code here
    var pre = null 
    var p = null
    while(pHead != null){
      p = pHead.next      // 记录下一个节点
      pHead.next = pre    // 把当前节点断开，指向前一个节点，也就是null（对第一个节点来说）
      pre = pHead         // 把当前节点作为前一个节点
      pHead = p           // 下一个节点作为当前节点
    }
    return pre
}


