const express = require('express')//老的node框架
const app = express()//实例化应用
const renderer3 = require('@vue/server-renderer')
//vue模块中引入server-renderer
//ssr来做模版的编译，编译成字符串
const vue3Compile = require('./node_modules/@vue/compiler-ssr')
const Vue = require('vue')
const vueapp = {
    template: `<div>
    <h1 @click="add">{{num}}</h1>
    <ul>
        <li v-for="(todo,n) in todos">{{n+1}}--{{todo}}</li>
    </ul>
</div>`,
    data() {
        return {
            num: 1,
            todos: ['吃饭', '睡觉', '打豆豆']
        }
    },
    methods: {
        add() {

        }
    }
}
// 服务器渲染
vueapp.ssRender = new Function('require',
    vue3Compile.compile(vueapp.template).code)(require)
// 路由中间件
app.get('/', async function (req, res) {
    let vapp = Vue.createSSRApp(vueapp)
    let html = await renderer3.renderToString(vapp)
    const title = 'Vue SSR'
    let ret = `
    <!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
    </head>
    <body>
    <div id="app">
        ${html}
    </div>
</body>
</html>
    `
    res.send(ret)
})

app.listen(1234, () => {
    console.log('listen 1234');
})
