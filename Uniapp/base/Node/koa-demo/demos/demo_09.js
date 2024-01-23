const Koa = require('koa');

const app = new Koa();

const main = (ctx) => {
    const n = Number(ctx.cookies.get('view') || 0) + 1 // 获取浏览量
    ctx.cookies.set('view', n) // 设置浏览量
    ctx.body = n + ' views' // 返回浏览量
}
app.use(main)

app.listen(3000, () => {
    console.log('项目运行在3000端口');
})