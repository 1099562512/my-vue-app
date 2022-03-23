<template>
  <div>
    Welcome to Home
    <iframe-demo></iframe-demo>
  </div>
  <iframe class="iframe" name="i1" width="500" height="300" src="localhost/#/iframe">
    <iframe-demo></iframe-demo>
  </iframe>
</template>

<script setup>
import iframeDemo from './iframe.vue';

</script>

<style scoped>
  .iframe {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>