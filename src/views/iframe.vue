<template>
  <div>
    iframe{{count}}
    <button @click="onCount">计数</button>
    <button @click="getPname">获取实例name</button>
  </div>
</template>

<script setup>
import { onMounted, ref, toRef } from "vue";
import p from './common'

const count = ref(0)
const onCount = () => {
  count.value++
  //console.log(window.parent == window);
}

const getPname = () => {
  //console.log(p.getCount());
}
//判断在window还是iframe
onMounted(() => {
  //console.log(window);
  //console.log(window.parent == window);
})
</script>