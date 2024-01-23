const fs = require('fs')

// const info = fs.readdirSync('./test') //读取目录
// console.log(info);

// fs.mkdirSync('./test-dir/data/list', {recursive: true}) //创建目录

// fs.rmdirSync('./test-dir', {recursive: true}) //删除目录

fs.watch('./', {recursive: true}, (eventType, filename) => {
    console.log(`当前文件夹下${filename}文件变更为:${eventType}`);
})

