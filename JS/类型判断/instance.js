// 原始类型
let str = 'hello' // string
let num = 123 // number
let flag = true // boolean
let und = undefined // undefined
let nu = null // null

let big = 123n // big number
let s = Symbol('hello') // symbol

// 引用类型
let obj = {}
let arr = []  // arr.proto__ === Array.prototype
let fn = function () {}
let data = new Date()

// 判断引用类型（instanceof）
console.log(obj instanceof Object); // 判断obj 是否属于 Object类型
console.log(arr instanceof Array);
console.log(fn instanceof Function);
console.log(data instanceof Date);