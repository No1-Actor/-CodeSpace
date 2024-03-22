const jwt = require('jsonwebtoken'); 

//  创建一个token
const sign = (option) => {
    return jwt.sign(option, '666', {  // option  666是一个自定义加密算法
        expiresIn: '1h' // token有效时长1小时
    })
}

// 校验前端在请求头当中携带过来的token 是否有效
const verify = () => (ctx, next) => {
    let jwtToken = ctx.req.headers.authorization // 读取请求头中的 authorization 字段
    if(jwtToken) {
        // 校验token是否有效
        jwt.verify(jwtToken, '666', (err, decoded) => {
            if(err) { // 前端传过来的token无效
                ctx.body = {
                    status: 401,
                    message: 'token失效'
                }
            }
            else {
                next() // 放行，继续执行下一步
            }
        })
    }
    else {
        ctx.body = {
            status: 401,
            message: '请提供token'
        }
    }
}

module.exports = {
    sign,
    verify
}