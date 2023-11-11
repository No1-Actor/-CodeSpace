// let obj = {
//     a: 1,
//     b: 2
// }
// var arr = []
// obj[arr] = 3

// console.log(obj);

// ----------------------------------------------
let map = new Map([
    ['name', '老王']
])
let obj = {a:1}
map.set(obj, 'hello')

// console.log(map(obj));  // map is not a function  obj地址值和对象中地址值不一样

// map.forEach((value, key, map) => {
//     console.log(value, key, map);
// })

console.log([...map]);
// ----------------------------------------------