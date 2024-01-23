const http = require('http');

const server = http.createServer((req, res) => { // req 前端请求， res 后端响应
    res.statusCode = 200; // 设置响应状态码
    res.setHeader('Content-Type', 'text/html'); // 设置响应头

    // console.log(req.url, req.method);
    const { url } = req // url解构赋值
    const query = Object.fromEntries(new URL(url, 'http://localhost').searchParams) // 获取url中的参数

    if(url) {
        if(url === '/home') {
            res.end('<h1>hello home</h1>'); 
        } else if(url.startsWith('/detail') ) { // startsWith以什么开头
            
            if(query.id == 1) {
                res.end('<h1>hello detail111</h1>'); 
            }else if(query.id == 2) {
                res.end('<h1>hello detail22</h1>'); 
            }

        } else {
            res.end('not found')
        }
    }
});

server.listen(3000, () => { // 监听端口
    console.log('server is running on port 3000');
});