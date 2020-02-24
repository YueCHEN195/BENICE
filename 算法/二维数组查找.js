var arr = [[1,2,8,9],[2,4,9,6],[4,7,10,13],[6,8,11,15]]

function Find(target,array){
  var rows = array.length
  var cols = array[0].length
  for(var i = rows - 1,j = 0;i >= 0 && j < cols;){
      if(array[i][j] > target){
          i--
      }else if(array[i][j] < target){
          j++
      }else{
          return true
      }
  }
  return false
}


console.log(Find(8,arr))


