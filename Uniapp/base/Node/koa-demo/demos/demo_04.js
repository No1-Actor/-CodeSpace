const Koa = require('koa');
const Router = require('@koa/router');
const app = new Koa();
const router = new Router();

const main = (ctx) => {
    ctx.body = '首页页面'
}

const about = (ctx) => {
    ctx.body = 'about page'
}

router.get('/main', main)
router.get('/about', about)
app.use(router.routes()) // 配置的路由全部生效
app.use(router.allowedMethods()) // 允许路由所有方法生效(get、post等)

app.listen(3000, () => {
    console.log('项目运行在3000端口');
})

