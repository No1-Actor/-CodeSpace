const fs = require('fs')

fs.appendFileSync('./data.txt', '疑是地上霜')  // 向文件中追加内容
// fs.renameSync('./data.txt', './data1.txt')  // 重命名文件
// fs.renameSync('./data.txt', './pic/data.md')  // 移动文件

// fs.unlinkSync('./pic/data.md')  // 删除文件
// fs.rmSync('pic', { recursive: true }) // 删除文件夹