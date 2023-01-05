<template>
  <div class=''>
    <div class="content" @dblclick="deleteVideo" @click="demo.addCount()">
      content{{videoInfo.id}}
      <div>{{demo._count}}</div>
    </div>
  </div>
</template>
<script setup>
  import { onMounted, onUnmounted, reactive, toRefs } from 'vue'
  import { useStore } from 'vuex'
  //import { startPoller, endPoller, addCount, clearCount, state1 } from './demo.js'
  import Demo from './demo.js'
  const demo = new Demo()

  const store = useStore()
  const props = defineProps({
    videoInfo: {type: Object}
  })
  let poller = null

  const deleteVideo = () => {
    store.commit('DELETE_VIDEO', props.videoInfo.id)
  }
  onMounted(() => {
    //poller = startPoller(props.videoInfo.id + '轮询')
  })
  onUnmounted(() => {
    demo.clearCount()
    //endPoller(poller)
  })
</script>
<style scope>
  .content {
    width: 200px;
    height: 200px;
    background: blueviolet;
  }
</style> 