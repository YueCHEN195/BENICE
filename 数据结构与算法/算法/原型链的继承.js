function Person(){

}
Person.prototype.sayName = function(){
    console.log('I am a person')
}

function Man(){

}
Man.prototype.callName = function(){
    console.log('I am a man')
}

Man.prototype = new Person()

var Tom = new Man()


Tom.sayName()
Tom.callName()

//按照原型链的查找规则，我们要想通过Man new出来的实例继承Person中的方法，需要有manInstance.__proto__.__proto__ === Person.prototype
//这样顺着原型链查找，manInstance就可以找到Person构造函数保存在Person.prototype中的属性和方法了
//我们只需要设置 Man.prototype 为 Person new出来的一个实例就行了，因为这使得所有man new出来的实例的隐式原型的隐式原型指向了Person.prototype

