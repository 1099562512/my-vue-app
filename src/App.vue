<template>
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <AppProvider>
    <router-view></router-view>
  </AppProvider>
</template>
<script setup>
  import AppProvider from '@c/Application/AppProvider.vue'
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
