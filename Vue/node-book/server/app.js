const koa = require('koa');
const app = new koa()
const bodyParser = require('koa-bodyparser')  // 让koa能解析post请求
const cors = require('koa2-cors')  // 解决跨域问题

const user = require('./routes/user.js') // 引入路由
const note = require('./routes/note.js') // 引入路由

app.use(cors())  // 告诉浏览器允许跨域，解决跨域问题
app.use(bodyParser())  // 解析post请求

// 主要逻辑
// const main = (ctx) => {
//     ctx.body = 'Hello World'
// }

app.use(user.routes(), user.allowedMethods())   // 注册路由
app.use(note.routes(), note.allowedMethods())   // 注册路由

app.listen(3000, () => {
    console.log('项目已在3000端口启动');
})