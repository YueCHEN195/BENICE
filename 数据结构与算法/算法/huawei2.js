var line = '88 2000 10'
var lines = line.split(" ")
var m = parseInt(lines[0])
var d = parseInt(lines[1])
var t = parseInt(lines[2])
var totT = t
var totD = d
while(t > 0){
  //有魔法就用魔法
  if(m >= 10){
    d -= 60
    m -= 10
    t --
  }else if (((t - 1)*4 + m) >= 10){
    m += 4
    t --
  }else{
    d -= 17
    t --
  }
  if(d <= 0){
    console.log('YES'+' '+ (totT - t).toString())
  }
}
if(d > 0){
  console.log('NO' + ' '+ (totD - d).toString())
}