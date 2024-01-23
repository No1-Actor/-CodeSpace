const Koa = require('koa');

const app = new Koa();

const main = (ctx) => { // 只要被app use掉的函数一定具有ctx参数 ctx === koa
    if (ctx.url.startsWith('/home')) {
        ctx.response.type = 'json' // 设置响应头类型
        ctx.body = '<h2>hello world</h2>' // 设置响应体
    }else if (ctx.url.startsWith('/detail')) {
        ctx.body = 'detail'
    }else {
        ctx.body = 'NOT FOUND'
    }
}
app.use(main) // 注册中间件，将main函数注册到app中，当请求到来时，会执行main函数


app.listen(3000, () => {
    console.log('项目运行在3000端口');
})