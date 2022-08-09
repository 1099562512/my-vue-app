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
console.log(state); //Proxy {message: 'hello'}
console.log({...state}); //{message: 'hello'} state结构后对象属性失去响应特性
console.log(toRefs(state)); //{message: ObjectRefImpl}  toRefs赋予

//const { message } = toRefs(state)

</script>

<style scoped>
@import '@v/home.less';
</style>