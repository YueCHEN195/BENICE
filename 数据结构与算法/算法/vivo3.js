function solution( n ) {
  // write code here
  if(n < 10){
    return 10 + n
  }
  for(let i = 0;i < n*10;i++){
    let res = 1
    let m
    let value = i
    while (i!=0) {
      m = i % 10
      
      res = res * m
    }
    if(res == n) return value
  }
  return -1
}

console.log(solution(36))


