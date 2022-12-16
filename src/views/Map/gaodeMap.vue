<template>
  <div class=''>
    <div class="wrap" :style="style" >
      <div ref="title" class="title">title</div>
      <div class="content">content</div>
      <div ref="footer" class="footer">{{height}}</div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useDraggable, useElementSize } from '@vueuse/core'

const title = ref(null)
const footer = ref(null)

const { width, height } = useElementSize(footer)
const {x, y, style} = useDraggable(title, {
  initialValue: {x: 40, y: 40}
})
onMounted(() => {
  
})
</script>
<style lang='less' scope>
.wrap{
  position: fixed;
  width: 500px;
  color: #fff;
  .title {
    width: 100%;
    height: 50px;
    background: #000;
    cursor: move;
  }
  .content {
    width: 100%;
    height: 300px;
    background: orange;
  }
  .footer {
    width: 100%;
    height: 50px;
    background: blue;
  }
} 
</style>