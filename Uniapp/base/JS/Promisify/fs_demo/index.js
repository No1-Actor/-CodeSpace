// node 内置的模块化系统 CommonJS
// fs文件模块 内置的
const fs = require('fs') // 引入fs模块
// - 硬盘到内存
// - 文件大小
fs.readFile('./a.txt', 'utf-8', (err, data) => {
    // 后端 稳定性第一
    if(err) {
        console.log(err);
        return
    }    
    // Buffer 二进制
    // console.log(data.toString());
    console.log(data);
    // 回调地狱  
    fs.readFile('./b.txt', 'utf-8', (err, data2) => {
        if(err) {
            console.log(err);
            return
        }    
        // Buffer 二进制
        console.log(data2);
        
        fs.readFile('./c.txt', 'utf-8', (err, data3) => {
            if(err) {
                console.log(err);
                return
            }    
            // Buffer 二进制
            console.log(data3);
        })
    })
})
