Parent.prototype.getName() = function() {
    return this.name
}
function Parent(name){
    this.name = name
}

Child.prototype = new Parent() // 子类的原型指向父类的实例对象
Child.prototype.constructor = Child // 修复constructor属性   // 组合继承
function Child(name){
    Parent.call(this, name) // 相当于添加了一行 this.name = 'Tom'
    this.age = 18
}

let child = new Child('tom')
console.log(c1.getName());