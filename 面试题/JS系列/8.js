Parent.prototype.getName() = function() {
    return this.name
}
function Parent(){
    this.name = 'Tom'
}

Child.prototype = new Parent() // 子类的原型指向父类的实例对象  原型链继承
function Child(){
    Parent.call(this) // 相当于添加了一行 this.name = 'Tom' 构造函数的继承
    this.age = 18
}

let child = new Child()
console.log(child.name);