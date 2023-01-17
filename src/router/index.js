import { createRouter, createWebHashHistory } from 'vue-router'

//初始路由列表
const routes = [
  {
    path: "/",
    redirect: "/map/baidu"
  },
  {
    path: "/map",
    component: () => import('@c/Layout/index.vue'),
    children: [
      {
        path: "/map/baidu",
        component: () => import('@v/Map/baiduMap.vue')
      },
      {
        path: "/map/gaode",
        component: () => import('@v/Map/gaodeMap.vue')
      },
      {
        path: "/map/leaflet",
        component: () => import('@v/Map/leafLetMap.vue')
      }
    ]
  },
  {
    path: "/video",
    component: () => import('@c/Layout/index.vue'),
    children: [
      {
        path: "/video/demo1",
        component: () => import('@v/Video/demo1.vue')  //文件夹需要严格按照大小写，否则改文件夹下的页面会失去热更新
      },
      {
        path: "/video/demo2",
        component: () => import('@v/Video/demo2.vue')
      },
      {
        path: "/video/livePlayerDemo",
        component: () => import('@v/Video/livePlayerDemo.vue')
      }
    ]
  },
  {
    path: "/threejs",
    component: () => import('@c/Layout/index.vue'),
    children: [
      {
        path: "/threejs/demo1",
        component: () => import('@v/ThreeJs/demo1.vue')
      },
      {
        path: "/threejs/demo2",
        component: () => import('@v/ThreeJs/demo2.vue')
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
  //console.log("beforeEach");
  //next()
  return undefined
  //可以使用next控制导航，也可以通过返回一个值
})
//导航钩子，在每次导航后执行。返回一个删除注册钩子的函数
router.afterEach((to, from, failure) => {
  //console.log("afterEach");
})


export default router