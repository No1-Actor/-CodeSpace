const Router = require('@koa/router')
const router = new Router()
const { findNoteListByType, findNoteDetailById, notePublish } = require('../controllers/mysqlControl.js') // 引入数据库操作模块
const { formatDate } = require('../config/utils.js') // 引入工具函数

router.post('/findNoteListByType', async (ctx) => {
    const { note_type } = ctx.request.body
    // console.log(note_type);
    try {
        const result = await findNoteListByType(note_type)
        ctx.body = {
            code: '8000',
            data: result,
            msg: '查询成功'
        }
    } catch (error) {
        ctx.body = {
            code: '8005',
            data: error,
            msg: '服务器异常'
        }
    }
})

router.post('/findNoteDetailById', async (ctx) => {
    const { id } = ctx.request.body
    try {
        const result = await findNoteDetailById(id)
        if(result.length){
        ctx.body = {
            code: '8000',
            data: result[0],
            msg: '查询成功'
        }
      }else{
            ctx.body = {
                code: '8004',
                data: {},
                msg: '查询失败'
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

// 发布笔记
router.post('/publish', async (ctx) => {
    const { note_type, head_img, note_content, title, nickname, userId } = ctx.request.body
    const c_time = formatDate(new Date())
    const m_time = formatDate(new Date())
    try {
        const result = await notePublish([
            note_type, head_img, note_content, title, nickname, userId,
            c_time,
            m_time
        ])
        if(result.affectRows != 0){
            ctx.body = {
                code: '8000',
                data: 'success',
                msg: '发布成功'
            }
        }else{
            ctx.body = {
                code: '8004',
                data: 'error',
                msg: '发布失败'
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