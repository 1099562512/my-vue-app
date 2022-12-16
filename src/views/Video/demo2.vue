<template>
  <div class='video-wrap'>
    <div 
      @mousedown="onMouseDown"
      @mousemove="onMouseMove"
      @mouseup="onMouseUp"
      id="video"
    >
    </div>
  </div>
</template>
<script setup>
  import { ref, onMounted, nextTick, reactive, onUnmounted } from 'vue'
  import flvjs from 'flv.js'
  import DPlayer from 'dplayer'

  import { CaretLeftOutlined, PauseOutlined } from '@ant-design/icons-vue'

  const isloading = ref(true)
  let player = null,
      flvPlayer = null

  const destoryPlayer = () => {
    player && player.destroy()
    if(flvPlayer) {
      flvPlayer.pause()
      flvPlayer.unload()
      flvPlayer.detachMediaElement()
      flvPlayer.destroy()
      flvPlayer = null
    }
  }

  const initPlayer = () => {
    let videoDom = document.getElementById('video')
    //destoryPlayer()
    player = new DPlayer({
      container: videoDom,
      live: true,
      autoplay: true,
      screenshot: true,
      preventClickToggle: true,
      video: {
        url: 'http://192.168.254.205:81/test/test.live.flv',
        //url: 'https://sf1-hscdn-tos.pstatp.com/obj/media-fe/xgplayer_doc_video/flv/xgplayer-demo-360p.flv',
        type: 'customFlv',
        customType: {
          customFlv: (video, player) => {
            flvPlayer = flvjs.createPlayer({
              type: 'flv',
              url: video.src
            })
            flvPlayer.attachMediaElement(video)
            flvPlayer.load()
          }
        }
      }
    })
  }

  onMounted(() => {
    initPlayer()
    document.querySelector("#video").oncontextmenu = () => {
      document.querySelector(".dplayer-menu").style.display = "none";
      document.querySelector(".dplayer-mask").style.display = "none";
      return false;
    };
  })
  onUnmounted(() => {
    destoryPlayer()
  })
</script>
<style lang='less' scope>
  .video-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    #video {
      width: 500px; 
      height: 300px; 
      background: #000;
    }
  }
</style>