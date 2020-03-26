var array = [10,9,8,7,6,5,4,3,2,1]

// 冒泡

function bubbleSort(array){
  let length = array.length
  for(let i = length - 1;i >= 0; i--){
    for(let j = 0;j <= i - 1;j++){
      if(array[j] > array[j + 1]){
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}

// 选择

function selectionSort(array){
  let length = array.length
  for(let i = 0;i < length;i++){
    let min = i
    for(let j = i + 1;j < length;j++){
      if(array[j] < array[min]){
        min = j
      }
    }
    let temp = array[min]
    array[min] = array[i]
    array[i] = temp
  }
  return array
}

console.log(selectionSort(array))