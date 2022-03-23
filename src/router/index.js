import { createRouter, createWebHashHistory } from 'vue-router'

//初始路由列表
const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {
      title: "首页"
    } 
  },
  {
    path: "/home",
    component: () => import('views/home'),
  },
  {
    path: "/iframe",
    component: () => import('views/iframe'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router