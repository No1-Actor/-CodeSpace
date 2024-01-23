function mul(n) { // mul 
    if (n === 0 || n === 1) {
        return 1;
    } else {
         n * mul(n - 1);
    }
}

console.log(mul(5)); // 输出阶乘结果
