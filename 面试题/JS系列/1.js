let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

// let s = arr.splice(1, 3, 'hello')

let arr1 = ['1', '2', '3', '4', '5', '6', '7']
// arr1.find((item, index, arr1) => {
//     console.log(item, index, arr1)
//     }
// )
// console.log(arr1);

// arr1.forEach((item, index, arr1) => {
//     if(item > 5){
//         item * 10
//     }
// })
// console.log(arr1);

// console.log(s);
// console.log(arr);

let s = arr.reduce((pre, item, index, arr) => {
    return pre + item
},0)

console.log(s);