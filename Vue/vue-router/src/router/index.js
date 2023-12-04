import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Newest from '../homeChild/newest.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home,
        children: [
        {
            path: '/home',
            redirect: '/home/newest'
        },
        {
            path: '/home/newest',
            component: Newest
        },
        {
            path: 'recommend',
            component: () => import('../homeChild/recommend.vue')
        }
        ]

    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    history: createWebHistory(), // 路由history模式，hash模式
    routes
})

export default router