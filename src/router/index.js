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
  /* {
    path: "/home",
    component: () => import('@c/Layout/index'),
  }, */
  {
    path: "/home",
    component: () => import('@v/home.vue')
  },
  {
    path: "/iframe",
    component: () => import('@v/iframe'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router