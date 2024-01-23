// 浅拷贝
// let a = {name: '俊熙'}
// let b = Object.create(a) 
// a.name = '小明'

// console.log(b.name);

// -------------------------------------
let a = {name: '俊熙', like: {n: 'coding'}}

let b = Object.assign({}, a) // assign 用于将一个或多个对象的所有属性复制到目标对象
a.like = {}

console.log(b.like);

