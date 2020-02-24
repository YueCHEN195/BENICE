var list = [1,2,3,4,5,6,7,8,9]
function reOrderArray(array)
{
    // write code here
    var ary1 = []
    var ary2 = []
    for(item of array){
      if(item % 2 == 0){
        ary2.push(item)
      }else{
        ary1.push(item)
      }
    }
    return ary1.concat(ary2)
}


console.log(reOrderArray(list))