stack = []
minstack = []

function push(node)
{
    // write code here
    stack.push(node)
    if(minstack.length == 0){
        min = node
        minstack.push(min)
    }else{
        if(node <= min){
            min = node
            minstack.push(min)
        }
    }
    
}
function pop()
{
    // write code here
    if(stack[stack.length - 1] == minstack[minstack.length - 1]){
        minstack.pop()
    }
    return stack.pop()
}
function top()
{
    // write code here
    return stack[stack.length - 1]
}
function min()
{
    // write code here
    return minstack[minstack.length - 1]
}





