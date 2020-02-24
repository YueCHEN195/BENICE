function test(){
  var ar = []
  for(var i = 0;i<10;i++){
    ar[i] = function(){
      return i
    }
  }
  return ar
}

console.log(test()[5]())