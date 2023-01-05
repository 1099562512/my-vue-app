<template>
  <div class=''>
    <!-- <div class="wrap" :style="style" >
      <div ref="title" class="title">title</div>
      <div class="content">content</div>
      <div ref="footer" class="footer">{{height}}</div>
    </div> -->
    <a-space>
      <a-button type="primary" @click="addVideo(1)">添加1</a-button>
      <a-button type="primary" @click="addVideo(2)">添加2</a-button>
      <a-button type="primary" @click="addVideo(3)">添加3</a-button>
    </a-space>
    <demo v-for="item in videoList" :key="item.id" :videoInfo="item"></demo>
  </div>
</template>
<script setup>
import { ref, onMounted, toRef } from 'vue'
import { useStore } from 'vuex'
import { useDraggable, useElementSize } from '@vueuse/core'
import demo from '@c/demo/demo.vue'

const store = useStore()
const title = ref(null)
const footer = ref(null)

const { width, height } = useElementSize(footer)
const {x, y, style} = useDraggable(title, {
  initialValue: {x: 40, y: 40}
})

const videoList = toRef(store.state, 'videoList')

const addVideo = (id) => {
  store.commit('ADD_VIDEO', { id: id })
}

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