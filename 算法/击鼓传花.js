// 用队列来实现，游戏规则：不断数数，数到的人淘汰，求最后剩下的那个人
var list = [1,2,3,4,5,6,7,8,9,10]  //给成员编号
function findNumber(num, list){
  if(list instanceof Array !== true){
    throw new error({message: 'must be a list'})
  }else{
    while(list.length > 1){
      for(let i = 0;i < num - 1 ;i++){
        list.push(list.shift())
      }
      list.shift()
    }
  }
  return list[0]
}
console.log(findNumber(5,list))