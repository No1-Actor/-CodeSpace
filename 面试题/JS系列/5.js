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
//     age: 18
// }
// let b = Object.assign({}, a)

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

// let b = structuredClone(a)


function a(){
    console.log('hello');
}

function copy(fn){
   fn = fn.toString()
   return new Function(`return ${fn}`)()
}

let foo = copy(a)
foo()