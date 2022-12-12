<template>
  <div class=''>
    <!-- <a-button type="primary" @click="showModal">弹窗12312</a-button> -->
    <video
      id="video-wrap"
      preload="auto"
      muted
      autoplay
      style="width: 100%;height: 300px"
    >
      <source />
    </video>
  </div>
</template>
<script setup>
  import { ref, onMounted, nextTick, reactive } from 'vue'
  import flvjs from 'flv.js'

  let player = null
  
  const destoryPlayer = () => {
    if(player) {
      player.pause()
      player.unload()
      player.detachMediaElement
      player.destroy()
      player = null
    }
  }

  const addPlayerEvent = () => {
    player.on(flvjs.Events.LOADING_COMPLETE, (e) => {
      console.log('加载完成');
    })
    player.on(flvjs.Events.MEDIA_INFO, (e) => {
      console.log(e);
      console.log('媒体信息');
    })
    player.on(flvjs.Events.STATISTICS_INFO, (res) => {
      console.log('请求数据信息');
      console.log(res);
    })

    player.on(flvjs.Events.ERROR, (errorType, errorDetail, errorInfo) => {
      console.log(errorInfo);
    })
  }

  onMounted(() => {
    let videoDom = document.getElementById('video-wrap')
    destoryPlayer()
    player = flvjs.createPlayer({
      type: 'flv',
      //url: 'http://192.168.2.104/live/test.live.flv',
      url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
      isLive: false,
      enableWorker: true, // 启用分离的线程进行转换
      enableStashBuffer: false, // 关闭IO隐藏缓冲区
      stashInitialSize: 128, // 减少首帧显示等待时长
    })

    player.attachMediaElement(videoDom)
    player.load()
    player.play()
    addPlayerEvent()
    /* setInterval(() => {
      //console.log(videoDom.currentTime); //当前视频时间
      //console.log(videoDom.duration); //视频总时间
      //console.log(player.statisticsInfo.decodedFrames); //改值不变表示视频暂停、卡住、已播放完成
    }, 1000); */
  })
</script>
<style lang='scss' scope>
</style>