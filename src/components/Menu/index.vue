<template>
  <template v-for="item in menuList" :key="item.path">
      <!-- <a-menu-item>{{item.title}}</a-menu-item> -->
    <template v-if="item.subMenu">
      <a-sub-menu :key="item.id" :title="item.title">
        <asider-menu :menuList="item.subMenu"></asider-menu>
        <!-- <a-menu-item v-for="menuItem in item.subMenu" :key="menuItem.path">{{menuItem.title}}</a-menu-item> -->
      </a-sub-menu>
    </template>
    <a-menu-item v-else :key="item.path">{{item.title}}</a-menu-item>
  </template>
</template>
<script setup>
  import { ref, defineProps } from 'vue' 
  const props = defineProps({
    menuList: {
      type: Array
    }
  })
</script>
<script>
  import { defineComponent } from 'vue' 
  export default defineComponent({
    name: 'AsiderMenu'
  })
</script>
<style lang="less" scoped></style>