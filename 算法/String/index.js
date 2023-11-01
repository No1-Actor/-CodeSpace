// let str = 'abcdefg'
console.log(str.charAt(2)); // 读取字符串中第三个数

console.log(str + 'mn'); // 字符串拼接

let arr = str.split('d'); // 字符串分割
arr.splice(4) // 删除数组元素
arr.join('') // 将数组中的所有元素连接成一个字符串

const str = 'yesey'
function ispalindrome(s) {
    const res = s.split('').reverse().join('')  // reverse() 反转数组中元素的顺序
    return s === res
}

function ispalindrome(s) {
    const len = s.length
    for (let i = 0; i < len / 2; i++) {
        if(s[i] !== s[len - 1 - i]){
            return false
        }
    }
    return true
}
console.log(arr);