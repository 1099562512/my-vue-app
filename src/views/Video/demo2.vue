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
  <a-space>
    <a-button type="primary" @click="setCookie">设置Cookie</a-button>
    <a-button type="primary" @click="send">发送</a-button>
  </a-space>
</template>
<script setup>
  import { ref, onMounted, nextTick, reactive, onUnmounted } from 'vue'
  import flvjs from 'flv.js'
  import Hls from 'hls.js'
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
  const setCookie = () => {
    let name = "JSESSIONID", value="2C2159E6A6B7C7AD56DA3B292A6E6A28", domain="192.168.254.205"
    //document.cookie = `${name}=${value};domain=${domain}`
    document.cookie = "JSESSIONID=2C2159E6A6B7C7AD56DA3B292A6E6A28;domain=http://192.168.254.205"
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
        url: 'http://192.168.254.205:81/rtp/34020000111320000001_34020000111320000001.live.flv',
        //url: 'http://192.168.254.205:81/rtp/34020000111320000001_34020000111320000001.live.flv',
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
      /* video: {
        url: 'http://192.168.254.205:81/rtp/34020000111320000001_34020000111320000001/hls.m3u8',
        type: 'customHls',
        customType: {
          customHls: (video, player) => {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
            hls.on(hls.Events.MANIFEST_PARSED, () => {
              console.log("123");
            })
            hls.on(hls.Events.ERROR, (event,data) => {
              console.log(event);
            })
          }
        }
      } */
    })
  }

  const send = () => {
    fetch('http://192.168.254.205:18080/api/ptz/control/34020000111320000001/34020000111320000001?command=right&horizonSpeed=30&verticalSpeed=30&zoomSpeed=30', {
      method: "POST",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      } 
    }).then(res => {
      console.log(res);
    })
  }
  onMounted(() => {
    initPlayer()
    //command=top&horizonSpeed=30&verticalSpeed=30&zoomSpeed=30'
    
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