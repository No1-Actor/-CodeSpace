// 文件系统
// const fs = require('fs');

// 同步
// const syncData = fs.readFileSync('./data.txt', 'utf-8'); // 读取文件
// console.log(syncData);

// 异步
// fs.readFile('./data.txt', 'utf-8', (err, res) => {  // 读取文件
//     if (err) throw err;
//     console.log(res);
// })

// fs.promises.readFile('./data.txt', 'utf-8').then(res => {  // 读取文件
//     console.log(res);
// })

const fs = require('fs/promises')
fs.readFile('./data.txt', 'utf-8').then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});