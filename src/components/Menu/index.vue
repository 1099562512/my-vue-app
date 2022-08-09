<template>
  <Menu>
    <MenuItem>
        123
    </MenuItem>
    <SubMenu>
      <template #title>
        12312
      </template>
      <MenuItem>
        什么贵
      </MenuItem>
    </SubMenu>
  </Menu>
  <!-- <a-menu>
    <a-menu-item>菜单项</a-menu-item>
    <a-sub-menu key="sub1" title="子菜单">
      <a-menu-item>子菜单项</a-menu-item>
    </a-sub-menu>
  </a-menu> -->
</template>
<script setup>
  import { Menu } from 'ant-design-vue'
  import { SubMenu, MenuItem } from 'ant-design-vue';
</script>
<style lang="less" scoped>

</style>