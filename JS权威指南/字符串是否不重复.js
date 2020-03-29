var str1 = 'abcdefghij'
var str2 = 'abbbbbbbbb'

function isRepeated(str){
  for(let c of str){
    if(str.indexOf(c)!=str.lastIndexOf(c)){
      return false
    }
  }
  return true
}

console.log(isRepeated(str1))
console.log(isRepeated(str2))