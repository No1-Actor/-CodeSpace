// Person.prototype  原型 也是对象
Person.prototype.say = function () { // prototype 原型
    return 'hello'
}

function Person() {
    this.name = '肖总'
    this.age = 18
}

let p = new Person()
console.log(p.say()); 