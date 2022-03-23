<template>
  <div>
    iframe{{count}}
    <button @click="onCount">计数</button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const count = ref(0)
const onCount = () => {
  count.value++
  console.log(window.parent == window);
}

//判断在window还是iframe
onMounted(() => {
  console.log(window);
  //console.log(window.parent == window);
})
</script>