// server > utils > jwt.js
const jwt = require('jsonwebtoken')

// sign用于生成token，666作为加密的私钥可以自行定义
function sign(option) {
  return jwt.sign(option, '666', {
    expiresIn: 60 // 当前设定过期时间在60秒之后
  })
}

// 新增代码
// isAdmin参数用于权限控制
let verify = (isAdmin) => (ctx, next) => {
  // 获取到前端传递多来的token
  let jwtToken = ctx.req.headers.authorization
  if (jwtToken) {
    // 校验token的合法性
    jwt.verify(jwtToken, '666', function(err, decoded) {
      if (err) {
        ctx.body = {
          status: 401,
          message: 'token失效'
        }
      } else {
        if (isAdmin) {
          let { admin } = decoded
          if (admin) {
            next()
          } else {
            ctx.body = {
              status: 401,
              message: '你不是管理员!权限不够!'
            }
          }
        } else {
          next()
        }
      }
    });
  } else {
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