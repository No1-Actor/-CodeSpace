import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/goods', // 重定向到goods页面'
  },
  {
    path: '/goods',
    name: 'goods', // js跳转传参用
    component: () => import('@/views/goods'),
  },
  {
    path: '/comment',
    name: 'comment', // js跳转传参用
    component: () => import('@/views/comment'),
  },
  {
    path: '/seller',
    name: 'seller', // js跳转传参用
    component: () => import('@/views/seller'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
