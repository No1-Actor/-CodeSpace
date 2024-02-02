import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        meta:{
            title: '首页'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
        meta:{
            title: '关于'
        },
        beforeEnter: (to, from, next) => {
            console.log(to, from);
            next()
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 全局的前置钩子
// router.beforeEach((to, from, next) => {
//     document.title = to.meta.title
//     // console.log(to, from)
//     if(to.path !== '/'){
//         const isLogin = localStorage.getItem('isLogin')
//         if(isLogin){
//             next()
//         }else{
//             alert('请先登录')
//             return
//         }
//     }
//     next()
// })

// router.beforeResolve((to, from, next) => {
//     console.log(to,from);
// })

// router.afterEach((to, from) => {
//     console.log(to, from)
// })


export default router