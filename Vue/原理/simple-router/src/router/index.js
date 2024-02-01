// import { createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from './myRouter/index'

import Home from '../views/Home.vue' 
import About from '../views/About.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router