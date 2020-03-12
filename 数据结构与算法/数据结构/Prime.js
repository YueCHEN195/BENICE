function isPrime(num){
  let range = Math.sqrt(num)
  for(let i = 2; i <= range;i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}


function getPrime(num){
  while(!isPrime(num)){
    num++
  }
  return num
}

module.exports = {isPrime, getPrime}