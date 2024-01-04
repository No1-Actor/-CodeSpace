// 后台管理系统 History html5 pushState 公司内部使用  chrome
// 用户端 移动项目没这个问题， PC 端 

import { usePermissStore } from '../store/permiss'
import Home from '../views/home.vue'; // 直接引入 开销大
import { createRouter, createWebHistory  } from 'vue-router'

// 路由配置 后台管理系统
// 设置数组
// admin [1,2,3]
// user [1]
// useRouer meta.permiss 你要访问的页面权限 includes true
const routes = [
    {
        path: '/',
        name: 'home',
        redirect: '/dashboard', // 重定向 302
    },
    {
        path: '/',
        name: 'Home', // useRouter push
        component: Home, // 父路由 Layout 
        children: [ // 子路由
            {
                path: '/dashboard',
                name: 'dashboard',
                meta: {
                    title: '系统首页', // 路由守卫
                    permiss: '1', // 权限 
                },
                component: () => import('../views/Dashboard.vue')
            },
            {
                path: '/table',
                name: 'basetable',
                meta: {
                    title: '表格', // 路由守卫
                    permiss: '2', // 权限 
                },
                // 动态挂载路由 异步
                component: () => import('../views/Table.vue')
            }
        ]
    },
    {
        path: '/403',
        name: '403',
        meta: {
            title: '没有权限',
        },
        component: () => import('../views/403.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

// 路由守卫
router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | 后台管理系统`; 
    // 登录后的用户角色
    // const role = localStorage.getItem('ms_username'); // 用户角色
    const role = 'admin'; // 用户角色
    const permiss = usePermissStore(); // 用户权限
    // console.log(permiss);
    if(!role && to.path !== '/login') {
        next('/login');
    } else if(to.meta.permiss && !permiss.roleList[role].includes(to.meta.permiss)) { 
        next('/403')
    } else {
        next()
    }
})

export default router