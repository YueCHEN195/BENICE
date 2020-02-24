var str = 'nfngwwANIWGFWOVSDNM21358937...'

const transform = (str)=> {  
  let res = ''           //for of 语法不能通过改变c的值改变数组或者字符串  c只是形参
  for (let c of str){
    if (/[a-z]/.test(c)){
      c = c.toUpperCase()
    }else if (/[A-Z]/.test(c)){
      c = c.toLowerCase()
    }
    res += c
  }
  return res
}

console.log(transform(str))