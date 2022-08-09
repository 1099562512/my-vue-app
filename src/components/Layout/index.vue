<template>
  <Layout class="xgz-default-layout">
    <Layout>
      <div class="header">header</div>
      <Layout class="xgz-layout">
        <div class="asider">
          <AsiderMenu></AsiderMenu>
        </div>
        <div class="content">
          Content
        </div>
      </Layout>
    </Layout>
  </Layout>
</template>

<script setup>
  import { Layout } from 'ant-design-vue'
  import Asider from './Asider.vue';
  import Content from './Content.vue';
  import AsiderMenu from "@c/Menu"
  
</script>

<style lang="less">
  .xgz-default-layout {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .header {
    height: 8vh;
    text-align: center;
    background-color:antiquewhite;
  }
  .xgz-layout {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 92vh;
  }
  .asider {
    width: 20vw;
    background-color: bisque;
  }
  .content {
    flex-grow: 1;
    background-color: rgb(150, 165, 64);
  }
</style>