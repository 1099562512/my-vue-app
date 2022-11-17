<template>
  <div class=''>
    百度地图
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
const keyValue = [
  [38, 'up'],
  [40, 'down'],
  [37, 'left'],
  [39, 'right']
]
const keyMap = new Map(keyValue)

const onkeydown = (e) => {
  const { key, code, keyCode, altKey, ctrlKey, shiftKey } = e
  //console.log('keyCode :>> ', keyCode);
  //console.log('key :>> ', key);
  console.log(keyMap.has(keyCode));
}

onMounted(() => {
  document.addEventListener('keydown', onkeydown)
})
onUnmounted(() => {
  document.removeEventListener('keydown', onkeydown)
})
</script>
<style lang='scss' scope>
  
</style>