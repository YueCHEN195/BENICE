function solution(n,m){
  let list = []
  let result = []
  for(let i = 1;i <= n;i++){
    list.push(i)
  }
  let count = 1
  let index = 0
  while(list.length!=0){
    if(index == list.length){
      index = 0
    }
    if(count % m == 0){
      result.push(list[index])
      list.splice(index,1)
    }else{
      index ++
    }
    count ++
  }
  return result.join(' ')
}

console.log(solution(6,3))