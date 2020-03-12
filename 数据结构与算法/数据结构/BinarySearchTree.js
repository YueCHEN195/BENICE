class Node {
  constructor(key){
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }

  insert(key){
    let newNode = new Node(key)
    if(!this.root){
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
    }

    function insertNode(node, newNode){
      if(node.key > newNode.key){
        if(!node.left){
          node.left = newNode
          return
        }else{
          insertNode(node.left, newNode)
        }
      } else {
        if(!node.right){
          node.right = newNode
          return
        }else{
          insertNode(node.right, newNode)
        }
      }
    }
  }
  
  // 先序遍历

  preOrderTraversal(handler){
    preOrder(this.root,handler)

    function preOrder(node, handler){
      if(!node) return
      handler(node.key)
      preOrder(node.left,handler)
      preOrder(node.right,handler)
    }
  }

  midOrderTraversal(handler){
    midOrder(this.root,handler)

    function midOrder(node, handler){
      if(!node) return
      midOrder(node.left,handler)
      handler(node.key)
      midOrder(node.right,handler)
    }
  }

  postOrderTraversal(handler){
    postOrder(this.root,handler)

    function postOrder(node, handler){
      if(!node) return
      postOrder(node.left,handler)
      postOrder(node.right,handler)
      handler(node.key)
    }
  }

  min(){
    let node = this.root
    while(node.left){
      node = node.left
    }
    return node.key
  }

  max(){
    let node = this.root
    while(node.right){
      node = node.right
    }
    return node.key
  }

  search(key){

    return find(this.root,key)   // 如果找到了就逐层返回了

    function find(node,key){
      if(!node) return false
      if(node.key == key){
        return true
      }else if(node.key > key){
        return find(node.left,key)
      }else{
        return find(node.right,key)  // 不要忘记把返回值传递给上级递归
      }
    }

    // 单向递归，写成循环也很简洁

    // let node = this.root
    // while(node){
    //   if(node.key > key){
    //     node = node.left
    //   }else if(node.key < key){
    //     node = node.right
    //   }else{
    //     return true
    //   }
    // }

    // return false
  }

  remove(key){
    let current = this.root
    let parent = null
    let isLeftChild = false
    // 找节点
    while(current.key != key){
      parent = current
      if(current.key < key){
        current = current.right
        isLeftChild = false
      }else{
        current = current.left
        isLeftChild = true
      }
      if(!current) return false //找完了还没找到
    }

    //找到了节点
    // 1. 删除的是叶子节点 2. 删除的节点只有一个子节点 3. 删除的节点有两个子节点
    if(!current.left && !current.right){
      if(current.key == this.root.key){
        return this.root = null
      }else if(isLeftChild){
        return parent.left = null
      }else{
        return parent.right = null
      }
    }else if(current.right){
      if(current.key == this.root.key){
        this.root = current.right
      }else if(isLeftChild){
        return parent.left = current.right
      }else{
        return parent.right = current.right
      }
    }else if(current.left){
      if(current.key == this.root.key){
        this.root = current.left
      }else if(isLeftChild){
        return parent.left = current.left
      }else{
        return parent.right = current.left
      }
    }else{

    }
  }
}

var bst = new BinarySearchTree()

bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(9)
bst.insert(8)
bst.insert(13)
bst.insert(14)
bst.insert(11)
bst.insert(25)

var res = ''
bst.midOrderTraversal((val)=>{
  res += val + '-'
})
console.log(res)
// console.log(bst.search(13))
// console.log(bst.search(12))
