const http = require('http')
const fs = require('fs')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json', 'charset=utf-8')

    if(req.url.startsWith('/movie')) {
        const data = fs.readFileSync('./data.json', 'utf-8')
            res.end(data)
    }
})

server.listen(3000, () => {
    console.log('项目在3000端口运行');
})