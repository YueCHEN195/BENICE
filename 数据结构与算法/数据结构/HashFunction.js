// 1.将字符串转换为：HashCode
// 2.将大的数字hashCode压缩到数组范围（大小）之内

function hashFunction(str, size){
  // 定义hashCode变量
  let hashCode = 0
  for(let i = 0;i < str.length;i++ ){
    // charCode是Unicode编码
    hashCode = 37*hashCode + str.charCodeAt(i)  //做一个多项式运算，霍纳算法，多项式的系数都为37（质数）
  }

  let index = hashCode % size   //这个地方也可以做位与运算，把index定位到size之内
  
  return index
}

module.exports = hashFunction