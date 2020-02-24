function Stack(){
  this.dataStore = []
  this.length = 0
}

Stack.prototype.push = (element) =>{
  this.dataStore.push(element)
  this.length++
}

Stack.prototype.pop = () => {
  this.length--
  return this.dataStore.pop()  //弹出去忘记返回接收到了
}

Stack.prototype.peek = () => {
  return this.dataStore[this.length - 1]
}

module.exports = Stack

