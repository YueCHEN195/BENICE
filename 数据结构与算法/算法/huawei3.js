var m = 40
var d = 200
var t = 4
var totT = t
var totD = d
while(t > 0){
  //有魔法就用魔法
  if(m >= 10){
    d -= 60
    m -= 10
    t --
  }else if (((t - 1)*4 + m) >= 10){
    m += 10
    t --
  }else{
    d -= 17
    t --
  }
  if(d < 0){
    console.log('YES')
    console.log(totT - t)
  }
}

if(d > 0){
  console.log('NO')
  console.log(totD - d)
}