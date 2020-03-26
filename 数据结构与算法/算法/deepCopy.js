function deepCopy(obj){
  // let newObj = {} 不能这么做，传进来的可能是个数组。。
  let newObj = Array.isArray(obj) === true ? [] : {}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      if(typeof obj[key] === 'object'){ //是数组还是对象都会返回 object
        newObj[key] = deepCopy(obj[key])
      }else{
        newObj[key] = obj[key]
      }
    }
  }
  return newObj
}

// undefined、function、symbol，不能通过JSON的方式来拷贝，在拷贝过程中会丢失