const Stack = require('./Stack.js')

function isH(str){
    str = str.toString()
    let s = new Stack()
    for(let c of str){
        s.push(c)
    }
    rstr = ''
    while(s.length > 0){
        rstr += s.pop()
    }
    return rstr == str
}

console.log(isH(123321))

console.log(isH(1234567890))

console.log(isH('abcdefg'))
