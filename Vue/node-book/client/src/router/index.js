import { createRouter, createWebHistory }from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/login.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue'),
        meta: {
            title: '注册'
        }
    },
    {
        path: '/noteClass',
        name: 'noteClass',
        component: () => import('../views/noteClass.vue'),
        meta: {
            title: '笔记分类'
        }
    },
    {
        path: '/noteList',
        name: 'noteList',
        component: () => import('../views/noteList.vue'),
        meta: {
            title: '笔记列表'
        }
    },
    {
        path: '/noteDetail',
        name: 'noteDetail',
        component: () => import('../views/noteDetail.vue'),
        meta: {
            title: '笔记详情'
        }
    },
    {
        path: '/notepublish',
        name: 'notepublish',
        component: () => import('../views/notepublish.vue'),
        meta: {
            title: '笔记发布'
        }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
const whitePath = ['/login', '/register'] // 创建一个免登录验证名单
router.beforeEach((to, from, next) => {
    document.title = to.meta.title  // 设置页面标题

    // console.log(to, from); // to: 要跳转的路径, from: 从哪个路径跳转而来 
    if(!whitePath.includes(to.path)) { // includes() 用于检测数组中是否存在指定的值，如果值存在，则返回 true，否则返回 false。
        if(!sessionStorage.getItem('userInfo')) { // getItem() 用于读取指定的 sessionStorage 值
            router.push('/login')
            return
        }   
    }  
    next()
})

export default router