function Fibonacci(n)
{
    // write code here
    arr = [0,1,1,2,3]
    if(n < 5){
        return arr[n]
    }else{
        while(n > arr.length - 1){
            arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        }
    }
    return arr[n]
}

console.log(Fibonacci(10))