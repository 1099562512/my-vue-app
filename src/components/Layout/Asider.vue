<template>
  <a-menu 
    mode="inline" 
    :open-keys="state.openKeys"
    @click="getMenu" 
    @openChange="openChange">
    <asider-menu :menuList="state.menuList"></asider-menu>
  </a-menu>
</template>
<script setup>
  import AsiderMenu from '../Menu/index.vue'
  import { reactive, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter(),
        route = useRoute()

  const state = reactive({
    openKeys: [],
    rootSubmenuKeys: [],
    menuList: [
      {
        id: 1,
        title: '地图',
        icon: '',
        subMenu: [
          {
            path: '/map/baidu',
            title: '百度地图',
            icon: ''
          },
          {
            path: '/map/gaode',
            title: '高德地图',
            icon: ''
          },
          {
            path: '/map/leaflet',
            title: 'Leaflet地图',
            icon: ''
          }
        ]
      },
      {
        id: 2,
        title: 'Web 3D',
        icon: '',
        subMenu: [
          {
            path: '/threejs/demo1',
            title: '3D示例1',
            icon: ''
          },
          {
            path: '/threejs/demo2',
            title: '3D示例2',
            icon: ''
          }
        ]
      },
      {
        id: 3,
        title: '视频',
        icon: '',
        subMenu: [
          {
            path: '/video/demo1',
            title: '视频示例1',
            icon: ''
          },
          {
            path: '/video/demo2',
            title: '视频示例2',
            icon: ''
          }
        ]
      },
      {
        id: 4,
        title: '测试',
        subMenu: [
          {
            id: 5,
            title: '测试1',
            subMenu: [
              {
                title: '测试2',
                path: ''
              }
            ]
          }
        ]
      }
    ]
  })

  state.rootSubmenuKeys = state.menuList.map(item => item.id)

  const getMenu = (e) => {
    const { key } = e
    router.push(key)
  }

  const openChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
    if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      state.openKeys = openKeys;
    } else {
      state.openKeys = latestOpenKey ? [latestOpenKey] : [];
    }
    /* console.log(openKey);
    if(openKey.length > 0) {
      const lastKey = []
      lastKey.push(openKey[openKey.length - 1])
      console.log(lastKey);
      state.openKeys = lastKey
    } */
  }
</script>