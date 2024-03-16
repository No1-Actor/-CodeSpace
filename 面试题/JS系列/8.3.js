let obj = {
    name: 'Tom',
    age: 18
}

let obj2 = Object.create(obj)  // 原型式继承
obj2.like.push('apple')

obj2.name = 'Jerry'

console.log(obj2);