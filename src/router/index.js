import { createRouter, createWebHashHistory } from 'vue-router'

//初始路由列表
const routes = [
  {
    path: "/",
    redirect: "/home/1"
  },
  {
    path: "/home",
    component: () => import('@v/home.vue'),
    children: [
      {
        path: "/home/1",
        component: () => import('@c/HelloWorld.vue')
      },
      {
        path: "/home/2",
        component: () => import('@c/Menu/index.vue')
      },
      {
        path: "/home/3",
        component: () => import('@c/Layout/index.vue')
      },
      {
        path: "/home/4",
        component: () => import('@c/Layout/Asider.vue')
      }
    ]
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

/* router.addRoute({
  path: "/",
  redirect: "/home",
  meta: {
    title: "首页"
  }
})

router.addRoute('/' ,{
  path: "/home",
  component: () => import('@v/home.vue')
}) */

router.beforeEach((to, from) => {
  console.log("beforeEach");
  //next()
  return undefined
  //可以使用next控制导航，也可以通过返回一个值
})
//导航钩子，在每次导航后执行。返回一个删除注册钩子的函数
router.afterEach((to, from, failure) => {
  console.log("afterEach");
})

console.log(router);

export default router