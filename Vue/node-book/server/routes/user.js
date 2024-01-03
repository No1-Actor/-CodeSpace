const Router = require('@koa/router')
const router = new Router()
const { userLogin } = require('../controllers/mysqlControl') // 引入数据库操作模块

// 定义登录接口
router.post('/login', async (ctx) => {
    // 获取到前端传递的账号和密码，去数据库中校验账号密码的正确性
    const { username, password } = ctx.request.body // 解构
    try {
        const result = await userLogin(username, password) // 必须先执行这行代码后面代码才会运行
        // console.log(result);
        if (result.length) { //账号密码存在
            let data = {
                id: result[0].id,
                nickname: result[0].nickname,
                username: result[0].username,
            }
            ctx.body = {
                code: '8000',
                data: data,
                msg: '登录成功'
            } 
        } else {
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '账号或密码错误'
            }
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: 'error',
            msg: '服务器异常'
        }
    }
    // console.log(username, password)
    // ctx.body = 'login success'
})

// 定义注册接口
router.post('/register', async (ctx) => { 
    // 拿到前端传过来的 username, password, nickname
    // 在数据中校验 username 是否存在，如果不存在
    // 往数据库中中植入一条新的数据
    
})
module.exports = router