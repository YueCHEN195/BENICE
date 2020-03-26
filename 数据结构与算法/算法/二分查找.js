var list = [1,2,3,6,9,11,19,25,30]
function binSearch(list, val){
  let left = 0
  let right = list.length - 1
  while(left <= right){
    let mid = Math.floor((right + left)/2)
    if(list[mid] === val){
      return mid
    }else if(list[mid] > val){
      right = mid - 1
    }else{
      left = mid + 1
    }
  }
  return -1
}
console.log(binSearch(list, 0))