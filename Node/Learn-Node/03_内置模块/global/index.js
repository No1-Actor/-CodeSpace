// console.log(gloabalThis === global);
// global.userInfo = {
//     name: 'zhangsan',
//     age: 20
// }
// console.log(Object.getOwnPropertyNames(global));

// __filename : 当前文件被解析过后的绝对路径 
// __dirname : 当前文件被解析过后的所在文件夹的绝对路径
// console.log(__filename);
// console.log(__dirname);

// console.log(process.argv); // 当前进程的命令行参数
// console.log(process.cwd()); // 当前进程所在的工作目录
// console.log(process.env); // 当前系统环境信息
// console.log(process.pid); // 当前进程的进程号
// console.log(process.platform); // 当前操作系统平台
// console.log(process.arch); // 当前CPU架构
// process.stdout.write('hello'); // 写入数据流

process.stdin.on('data', (data) => {
    console.log(`用户输入了：${data}`); // 读取输入流
})