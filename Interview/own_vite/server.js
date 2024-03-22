const Koa = require('koa');
const fs = require('fs');
const app = new Koa();
const path = require('path');

function rewriteImport(content) {
    // [0-9]一个
    // [] | [0|1|2|3] [^] () 分组 g 全文 \n
    return content.replace(/ from ['|"]([^'"]+)['|"]/g, function(s0, s1){
        if(s1[0] !== '.' && s1[0] !== '/'){
            return ` from '/@modules/${s1}'`;
        } else {
            return s0;
        }
    })
}
// 后端路由
// 中间件 middleware 洋葱模型
app.use(async ctx => {
    // ctx 请求上下文 + 响应对象
    const { request: { url, query } } = ctx;  

    if(url === '/'){
        // 设置响应头
        ctx.body = 'text/html';
        let content = fs.readFileSync('./index.html', 'utf-8'); // 同步读取文件
        ctx.body = content;
    } else if (url.endsWith('.js')) {
        // console.log(__dirname, url.slice(1));
        const p = path.resolve(__dirname, url.slice(1)); // resolve 会将多个参数解析为一个绝对路径
        ctx.type = 'application/javascript';
        const content = fs.readFileSync(p, 'utf-8');
        ctx.body = rewriteImport(content);
    }
})

app.listen(5173, () => {
    console.log('快来一起手写vite,拿下美团');
})
