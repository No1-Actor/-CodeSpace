const Koa = require('koa');
const fs = require('fs');
const app = new Koa();

const main = (ctx) => { // 只要被app use掉的函数一定具有ctx参数 ctx === koa
   if(ctx.url.startsWith('/user')) {
    const data = fs.readFileSync('./data.json', 'utf8') 
    ctx.body = data

   } else if (ctx.url.startsWith('/home')){
    const page = fs.readFileSync('./temeplate.html', 'utf8')
    // ctx.response.type = 'application/json'
    ctx.body = page 
   }
}
app.use(main) // 注册中间件，将main函数注册到app中，当请求到来时，会执行main函数

app.listen(3000, () => {
    console.log('项目运行在3000端口');
})