function solution( n ) {
  // write code here
  let res = 0
  let pro = 1
  let use = 0
  for(let i = 1;i <= n;i++){
      if(use == pro){
          pro++
          use = 0
      }
      res += pro
      use++
  }
}