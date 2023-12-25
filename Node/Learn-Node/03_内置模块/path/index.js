const path = require('path')

// console.log(path.join('a', 'b', 'c'));
// console.log(path.join(process.cwd(), '/model', 'index')); // 以当前工作目录为基准，拼接路径

// console.log(path.resolve('a', 'b', 'c'));  // 以当前文件所在目录为基准，拼接路径
// console.log(path.dirname(process.cwd())); // 返回路径的目录名

// console.log(path.basename('a/b/c.js')); // 返回路径的最后文件
// console.log(path.basename(__filename)); // 返回当前文件的文件名

// console.log(path.extname(__filename)); // 返回文件的扩展名

// console.log(path.normalize('a////b//c./js')); // 讲路径转化为规范化路径

// console.log(path.parse(__filename)); // 解析路径

// console.log(path.sep); // 获取当前系统的路径分隔符
console.log('foo\\bar\\baz'.split(path.sep));