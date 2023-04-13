<template>
  <div class=''>
    百度地图
    {{x}}
    {{y}}
    <a-button type="primary" @click="requestInfo">请求信息</a-button>
  </div>
</template>
<script setup>
  import { useMouse } from '@u/useUtil'; 
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
  const {x, y} = useMouse()

  const requestInfo = () => {
    fetch("/apis/info", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: "肖国志"
      })
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }
 /*  onMounted(() => {
    document.addEventListener('keydown', onkeydown)
  })
  onUnmounted(() => {
    document.removeEventListener('keydown', onkeydown)
  }) */
</script>
<style lang='scss' scope> 
</style>