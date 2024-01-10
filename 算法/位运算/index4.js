// 按位非 (~)
const num = 5 // 0000000000000000000000000000000000000000101
const res = ~num 

console.log(res); // -6

const binarySrt = '00001101' 
const res2 = reverseBit(binarySrt)

function reverseBit(str) {
    const n = parseInt(str, 2)
    return ~n
}
console.log(res2); // -14