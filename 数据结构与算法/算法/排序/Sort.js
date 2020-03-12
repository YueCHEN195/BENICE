Array.prototype.swap = function(i,j){
  let temp = this[i]
  this[i] = this[j]
  this[j] = temp
}

function bubble(array){
  let length = array.length
  for(let j = length - 1;j >= 0;j--){
    //不断缩小进行冒泡的范围
    for(let i = 0;i < j;i++){
      if(array[i] > array[i+1]){
        array.swap(i,i+1)
      }
    }
  }
  return array
}
//最坏的情况，要交换，N-1 + N -2 +。。。 + 1次
//比较相近的两个数据，如果不满足条件就交换顺序，每次可以找出一个满足条件的，放在后面
//等差数列求和，（N-1）+（N-2）+。。。。。+ 1，进行了 N（N-1）* 2 次比较，O（N2）复杂度

function selection(array){
  let length = array.length
  for(j = 0;j < length;j++){
    let minIndex = j
    // 不断缩小查最小值的范围
    for(i = j + 1;i < length;i++){
      if(array[i] < array[minIndex]){
        minIndex = i
      }
    }
    array.swap(minIndex, j)
  }
  return array
}
// 相对于冒泡法，优化了交换元素的次数，在最坏的情况要交换 N-1次
// 对数组不断的找最小值的下标（最大值），每次可以找出一个，放在最前面（最后面）
// 对比冒泡法，比较次数还是一样，有N-1 + 。。。 1 次，但是交换的次数变少了，复杂度还是O（N2）

function insertion(array){
  let length = array.length
  for(let i = 1;i < length;i++){
    let temp = array[i]
    let j = i   //j 为应该插入数据的index
    // 和前面的数据进行比较，找到比这个数据大的数据，就进入循环，开始往前挪动较大数据，直到找到合适位置J
    while(temp < array[j - 1] && j > 0){ // j = 0 的时候已经找到了正确位置
      array[j] = array[j - 1]
      j-- 
    }
    array[j] = temp
  }
  return array
}

// 最坏的情况下，也就是刚好是倒序的时候，复杂度O（N2）
// 但是如果数组有一部分是已经排序好了点，那效率会大大增加

function shellSort(array){
  let length = array.length
  // 初始化增量
  let gap = Math.floor(length / 2)
  while(gap >= 1){
    for(let i = gap;i < length;i++){
      let temp = array[i]
      let j = i
      while(temp < array[j - gap] && j >= gap){ //j < gap 的时候出循环 一个数已经找到正确位置
        array[j] = array[j - gap]
        j = j - gap
      }
      array[j] = temp
    }
    gap = Math.floor(gap / 2)
  }
  return array
}

//console.log(shellSort([231,45,123,11,2333,555555,62331,11111111111111]))
//使用原始增量，最坏的情况下为O（N2），跟选取的增量有关，在大部分情况下，希尔排序都优于简单排序

