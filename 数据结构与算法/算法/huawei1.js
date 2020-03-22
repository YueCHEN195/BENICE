var n = 7
var k = 3
var list = [2]
for(let j = 1;j <= k;j++){
  for(let i = 1;i <= n;i++){
    if(j == 1){
      list.push(true)
    }else if(i % j == 0){
      list[i] = !list[i]
    }
  }
}
for(let i = 1;i < list.length;i++){
  if(list[i]){
    print(i)
  }
}
