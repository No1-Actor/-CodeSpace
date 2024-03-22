const Router = require('@koa/router')
const router = new Router()
const jwt = require('../config/jwt')
const { userLogin, userFind, userRegister } = require('../controllers/mysqlControl') // 引入数据库操作模块
// 定义登录接口
router.post('/login', async (ctx) => {
    // 获取到前端传递的账号和密码，去数据库中校验账号密码的正确性
    // console.log('/////////////////////////')
    const { username, password } = ctx.request.body // 解构
    try {
        // const result = await userLogin(username, password) // 必须先执行这行代码后面代码才会运行
        // console.log(result);
        if (await userLogin(username, password)) {
          console.log('-----------')
          let jwtToken = jwt.sign({id: '1', username: ctx.request.body.username, admin: true})
          console.log(jwtToken, '?????????????????');
          ctx.body = {
            code: 0,
            data: username,
            token: jwtToken
          }
        } else {
          ctx.body = {
            code: 1,
            data: '用户名或密码错误'
          }
        }

    //     if (result.length) { //账号密码存在
    //         let data = {
    //             id: result[0].id,
    //             nickname: result[0].nickname,
    //             username: result[0].username,
    //         }
    //         ctx.body = {
    //             code: '8000',
    //             data: data,
    //             msg: '登录成功'
    //         } 
    //     } else {
    //         ctx.body = {
    //             code: '8004',
    //             data: 'error',
    //             msg: '账号或密码错误'
    //         }
    //     }
    } catch (error) {
      console.error(error)
        ctx.body = {
            code: '8005',
            data: 'error',
            msg: '服务器异常'
        }
    }

})

// 定义注册接口
router.post('/register', async (ctx) => { 
    // 拿到前端传过来的 username, password, nickname
    // 在数据中校验 username 是否存在，如果不存在
    // 往数据库中中植入一条新的数据
    const { username, password, nickname } = ctx.request.body
    if(!username || !password || !nickname) {
        ctx.body = {
            code: '8001',
            data: 'error', 
            msg: '昵称、用户名或密码不能为空'
        }
    }
    const findRes = await userFind(username)
    
    if(findRes.length) { // 账号已存在
        ctx.body = {
            code: '8002',
            data: 'error', 
            msg: '账号已存在'
        }
    }

    // 植入数据
    try {
        const findRes = await userFind(username)
        if (findRes.length) { // 账号已存在
          ctx.body = {
            code: '8003',
            data: 'error',
            msg: '账号已存在'
          }
          return
        }
        // 植入
        const registerRes = await userRegister([username, password, nickname])
        if (registerRes.affectedRows !== 0) {
          ctx.body = {
            code: '8000',
            data: 'success',
            msg: '注册成功'
          }
        } else {
          ctx.body = {
            code: '8004',
            data: 'error',
            msg: '注册失败'
          }
        }
      } catch (error) {
        ctx.body = {
          code: '8005',
          data: error,
          msg: '服务器异常'
        }
      }
})


module.exports = router