<template>
  <a-menu 
    mode="inline" 
    :open-keys="state.openKeys"
    @click="getMenu" 
    @openChange="openChange">
    <template v-for="item in state.menuList" :key="item.path">
      <!-- <a-menu-item>{{item.title}}</a-menu-item> -->
      <template v-if="item.subMenu">
        <a-sub-menu :key="item.id" :title="item.title">
          <a-menu-item v-for="menuItem in item.subMenu" :key="menuItem.path">{{menuItem.title}}</a-menu-item>
        </a-sub-menu>
      </template>
    </template>
  </a-menu>
</template>
<script setup>
  import { reactive, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  const router = useRouter(),
        route = useRoute()

  const state = reactive({
    openKeys: [],

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
      }
    ]
  })

  const getMenu = (e) => {
    const { key } = e
    console.log(e);
    router.push(key)
  }

  const openChange = (openKey) => {
    console.log(openKey);
    if(openKey.length > 0) {
      const lastKey = []
      lastKey.push(openKey[openKey.length - 1])
      console.log(lastKey);
      state.openKeys = lastKey
    }
  }
</script>