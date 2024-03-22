const Koa = require('koa');
const cors = require('koa2-cors');
const bodyParser = require('koa-bodyparser'); // koa无法解析后端post的参数，需要引入koa-bodyparser
const userRouter = require('./routes/user')

const app = new Koa()

// 解析post请求传递的参数
app.use(bodyParser())

// 处理跨域
app.use(cors()) 

// 让接口生效
app.use(userRouter.routes(), userRouter.allowedMethods()) // 将路由规则挂载到Koa上


app.listen(3000, () => {
  console.log('项目已启动在3000端口')
})