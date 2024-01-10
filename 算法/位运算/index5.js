// - 左移 (<<)
const num = 5 // 101
const lNum = num << 2 // 10100
// console.log(lNum)

// - 右移 (>>)
const rNum = num >> 2 // 1
// console.log(rNum);

// 如何实现一个高效率的整数的乘法和除法
function multiply(x, y) {
    let result = 0;
    while (y > 0) {
        if ((y & 1) !== 0) { // 判断y的最低位是否为1，如果为1，那么就进行乘法操作
            result += x;
        }
        x <<= 1; // 左移相当于乘以2
        y >>= 1; // 右移相当于除以2
    }

    return result;
}

// 示例
let product = multiply(2, 3);
console.log(product); 
