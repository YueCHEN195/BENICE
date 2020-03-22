console.log('99' + 1)
console.log('99' - 1)

Object.prototype.foo = () => {
  console.log(1)
}

var bar = {
  foo: function(){
    console.log(2)
  }
}

bar.foo()