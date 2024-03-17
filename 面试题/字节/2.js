let a = 9007199676527412
let b = 421786421

function sum(a, b){
    a = a.toString()
    b = b.toString()
    // while (a.length < b.length){ 
    //     a = '0' + a
    // }
    const len = Math.max(a.length, b.length)
    a = a.padStart(len, '0') // padStart 字符串前添加0
    b = b.padStart(len, '0') 
    
    let result = '' // 用于存储相加的结果
    let carry = 0 // 用于存储进位
    for(let i = len - 1; i >= 0; i--){ // 从字符串的最后一位开始循环到第一位，逐个处理相加和进位。
        const n =  +a[i] + + b[i] // 将当前位的字符转换为数字，然后加上上一位的进位
        carry = Math.floor(n / 10) // 将相加结果除以 10 并取整，得到进位。
        result = (n % 10) + result // 这行代码将相加的结果的个位数添加到
    }
    if(carry){ // 如果循环结束后还有进位，即最高位的相加结果超出了原来的位数，需要在结果的最前面加上 '1'，表示进位
        result = '1' + result 
    }
    return Number(result)
}

console.log(sum(a, b));