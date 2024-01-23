// 和数据库连接的操作
const mysql = require('mysql2');
const config = require('../config')

// 创建数据库连接池
const pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})

// 连接mysql
const allService = {
    query: function(sql, values) { // 执行sql语句
        // pool 连接
        return new Promise((resolve, reject) => {
            pool.getConnection((err, connection) => { // 获取连接
                if(err) {
                    reject(err) // 返回查询失败的原因
                }else {
                    connection.query(sql, values, (err, rows) => { // 执行sql语句
                        if(err) {
                            reject(err) 
                        } else {
                            resolve(rows) // 返回查询结果
                        }
                        connection.release() // 释放连接
                    })
                }
            })
        })
    }
}

// 登录功能
const userLogin = (username, password) => {
    let _sql = `select * from users where username="${username}" and password="${password}";` // mysql的查询语句
    return allService.query(_sql) // 返回查询结果
}

// 查询
const userFind = (username) => {
    let _sql = `select * from users where username="${username}";` // mysql的查询语句
    return allService.query(_sql) // 返回查询结果
}

// 注册校验功能
const userRegister = (values) => {
    let _sql = `insert into users set username=?,password=?,nickname=?;` // mysql的查询语句
    return allService.query(_sql, values) // 返回查询结果
}

// 根据类型查找笔记列表
const findNoteListByType = (note_type) => {
    let _sql = `select * from note where note_type="${note_type}";` // mysql的查询语句
    return allService.query(_sql) // 返回查询结果
}

// 根据id查找笔记详情
const findNoteDetailById = (id) => {
    let _sql = `select * from note where id="${id}";` // mysql的查询语句
    return allService.query(_sql) // 返回查询结果
}

// 发布笔记
const notePublish = (values) => {
    let _sql = `insert into note set note_type=?,head_img=?,note_content=?,title=?,nickname=?,userId=?,c_time=?,m_time=?;` // mysql的查询语句
    return allService.query(_sql, values) // 返回查询结果
}

module.exports = { // 抛出接口
    userLogin,
    userFind,
    userRegister,
    findNoteListByType,
    findNoteDetailById,
    notePublish,
}
