const http = require('http');

const server = http.createServer((req, res) => {
    // 跨域是浏览器不接受后端响应
    // 想个办法，让浏览器不得接收
    let data = {
        msg: 'hello cors'
    }
    res.end(JSON.stringify(data)) // 向前端发送数据
})

server.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})