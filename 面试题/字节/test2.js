let arr = [1, 2, 3]
let obj = {
    a: 1,
    b: 2,
    c: 3
}

// for(let item of arr){
//     console.log(item);
// }

let a = Symbol(Symbol.iterator)
console.log(arr.__prototy__[Symbol.iterator]);