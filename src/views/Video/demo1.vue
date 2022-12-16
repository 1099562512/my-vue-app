<template>
  <div class='video-wrap'>
    <div style="width: 500px; background: #000; position: relative">
      <a-spin v-if="isloading" class="absolute-center" tip="加载中..."/>
      <video
        id="video"
        preload="auto"
        muted
        autoplay
        style="width: 100%; height: 300px;"
      >
        <source />
      </video>
      <div class="tool">
        <div class="tool-item">
          <caret-left-outlined @click="onPause" class="icon"/>
        </div>
        <div class="tool-item">
          <pause-outlined @click="onPlay" class="icon"/>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, nextTick, reactive } from 'vue'
  import flvjs from 'flv.js'

  import { CaretLeftOutlined, PauseOutlined } from '@ant-design/icons-vue'

  const isloading = ref(true)
  let player = null
  
  const destoryPlayer = () => {
    if(player) {
      player.pause()
      player.unload()
      player.detachMediaElement()
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
      /* console.log('请求数据信息');
      console.log(res); */
      isloading.value = false
    })

    player.on(flvjs.Events.ERROR, (errorType, errorDetail, errorInfo) => {
      console.log(errorInfo);
    })
  }

  const onPause = () => {
    player && player.pause()
  }

  const onPlay = () => {
    isloading.value = true
    initPlayer()
  }

  const initPlayer = () => {
    let videoDom = document.getElementById('video')
    destoryPlayer()
    player = flvjs.createPlayer({
      type: 'flv',
      cors: true,
      url: 'http://192.168.254.205:81/test/test.live.flv',
      //url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
      isLive: false,
      enableWorker: true, // 启用分离的线程进行转换
      enableStashBuffer: false, // 关闭IO隐藏缓冲区
      stashInitialSize: 128, // 减少首帧显示等待时长
    })

    player.attachMediaElement(videoDom)
    player.load()
    player.play()
    addPlayerEvent()
  }
  onMounted(() => {
    initPlayer()
    /* setInterval(() => {
      //console.log(videoDom.currentTime); //当前视频时间
      //console.log(videoDom.duration); //视频总时间
      //console.log(player.statisticsInfo.decodedFrames); //改值不变表示视频暂停、卡住、已播放完成
    }, 1000); */
  })
</script>
<style lang='less' scope>
  .video-wrap {
    display: flex;
    justify-content: center;
  }
  .tool {
    display: flex;
    height: 40px;
    background: #3b81f0;
    align-items: center;
    .tool-item {
      width: 40px;
      color: #fff;
    }
  }
  .icon {
    font-size: 20px;
  }

  .absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff
  }
</style>