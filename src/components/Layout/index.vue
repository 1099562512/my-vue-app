<template>
  <!-- <Layout class="xgz-default-layout">
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
  </Layout> -->
  <a-layout class="layout-wraper">
    <a-layout-header>Header</a-layout-header>
    <a-layout>
      <a-row type="flex" style="flex-grow: 1;">
        <a-col :span="3">
          <a-layout-sider style="height: 100%"><Asider /></a-layout-sider>
        </a-col>
        <a-col :span="21">
          <a-layout-content style="height: 100%">Content</a-layout-content>
        </a-col>
      </a-row>
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script setup>
  import Asider from './Asider.vue';
  import Content from './Content.vue';
</script>

<style lang="less">
  .layout-wraper {
    height: calc(100vh - 32px);
  }
  .ant-layout-header {
    background-color: orange;
  }
  .ant-layout-sider {
    background-color: #3b81f0;
    width: 100% !important;
    max-width: 300px !important;
  }
  .ant-layout-content {
    background-color: rgb(209, 228, 38);
  }
  .ant-layout-footer {
    background-color: rgb(189, 190, 240);
    
  }
</style>