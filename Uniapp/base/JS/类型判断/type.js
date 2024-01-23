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
let arr = []
let fn = function () {}
let data = new Date()

// 判断类型
console.log(typeof str); // string
console.log(typeof num); // number
console.log(typeof flag); // boolean
console.log(typeof undefined); //undefined
console.log(typeof null); // object Bug
console.log(typeof big); // bigint
console.log(typeof s); // symbol

console.log(typeof obj); // object
console.log(typeof arr); // object 
console.log(typeof fn); // function  typeof只能判断引用类型中的fn