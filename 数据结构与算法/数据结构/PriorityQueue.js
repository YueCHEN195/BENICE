class QueueElement{
  constructor(element,priority){
    this.element = element
    this.priority = priority
  }
}

class PriorityQueue {

  constructor(){
    this.items = []
  }

  enqueue(element,priority){
    var queueElement = new QueueElement(element,priority)
    if(this.items.length === 0){
      this.items.push(queueElement)
    }else{
      let added = false
      for(let i = 0;i < this.items.length;i++){
        if(queueElement.priority < this.items[i].priority){
          this.items.splice(i,0,queueElement)
          added = true
          break
        }
      }
      if(!added){
        this.items.push(queueElement)
      }
    }
  }

  isEmpty(){
    if(this.items.length === 0){
      return true
    }else{
      return false
    }
  }

  size(){
    return this.items.length
  }

  front(){
    return this.items[0]
  }

  dequeue(){
    return this.items.shift()
  }

  toString(){
    let res = '['
    for (item of this.items){
      res += item.element + '-' + item.priority + ','
    }
    return res += ']'
  }
}

// var pq = new PriorityQueue()

// pq.enqueue('abc', 111)
// pq.enqueue('cba', 200)
// pq.enqueue('nba', 50)
// pq.enqueue('as2d', 60)
// pq.enqueue('ab32c', 300)
// pq.enqueue('ab21c', 60)

// console.log(pq)

module.exports = PriorityQueue
