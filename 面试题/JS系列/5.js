// let a = 1
// let b = a
// a = 2
// console.log(a) // 2


// let a = {
//     age: 18
// }
// let b = a
// a.age = 20
// console.log(b);


// let a = {
//     age: 18,
//     like: [1, 2]
// }
// let b = Object.assign({}, a)
// a.like.push(3)
// console.log(b);

// let a = [1, 2, {n: 3}]
// let b = [...a]
// a[2].n = 30
// console.log(b);

// let a = {
//     a:1,
//     b:Symbol(2),
//     c:undefined,
//     d: function(){},
//     e: {
//         f:2
//     },
// }

// let b = JSON.parse(JSON.stringify(a))
// let b = structuredClone(a)
// console.log(b);


let fn = function(){
    console.log(hello);
}

function copy(fn){
   fn = fn.toString()
   return new Function(`return ${fn}`)()
}

let foo = copy(a)
foo()