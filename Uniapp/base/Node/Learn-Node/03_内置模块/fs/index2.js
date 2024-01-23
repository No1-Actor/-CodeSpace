const fs = require('fs')

// fs.writeFileSync('./target.md', '举头望明月') // 写入文件

const img = fs.readFileSync('./avator.JPG',)

fs.writeFileSync('./pic/avator.JPG', img)  //将文件写入到指定目录下