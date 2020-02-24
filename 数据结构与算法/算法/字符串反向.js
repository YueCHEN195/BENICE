var readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('line',function(line){
  var list = line.split('').reverse().join('')
  console.log(list)
})