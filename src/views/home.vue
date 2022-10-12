<template>
  <div>
    {{ state.message }}
  </div>
</template>

<script setup>
import { ref, toRefs, watch, reactive } from 'vue'
import iframeDemo from '@v/iframe.vue';
const show = ref(false)
const state = reactive({
  message: "hello"
})
console.log(import.meta.env);
//const { message } = toRefs(state)

</script>

<style scoped>
  @import '@v/home.less';
</style>