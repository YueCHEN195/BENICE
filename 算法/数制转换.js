const Stack = require('./Stack')

function fn(n, base){
    let s = new Stack()
    do{
        s.push(n % base)
        n = parseInt(n / base)
    } while (n > 0)
    var result = ''
    while(s.length > 0){
        result += s.pop()
    }
    return result
}


result = fn(16,2)

console.log(result)