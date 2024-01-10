// 按位异或 (^)
// const num1 = 5 // 101
// const num2 = 6 // 110

// const res = num1 ^ num2 
// console.log(res); // 3

let num1 = 5 // 101
let num2 = 7 // 111

function swap(a, b){
    if(a < b){
        a = a ^ b // 101 ^ 111 = 010
        b = a ^ b // 010 ^ 111 = 101
        a = a ^ b // 101 ^ 111 = 010
        return [a, b]
    }
}

[num1, num2] = swap(num1, num2)
console.log(num1, num2); // 7 5