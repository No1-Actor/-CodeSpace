const fs = require('fs')

// console.log(fs.statSync('./target.md')); // 通过fs.statSync()方法获取文件的信息

const info = fs.statSync('./target.md')
// console.log(info.isDirectory()); // 判断是否是文件夹
console.log(info.isFile()); // 判断是否是文件

