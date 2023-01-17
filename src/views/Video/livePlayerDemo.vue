<template>
  <div class=''>
    <div style="width: 512px; height: 300px; margin: auto">
      123123
      <!-- <LivePlayer ref="player" :videoUrl="rtmpUrl"></LivePlayer> -->
    </div>
  </div>
</template>
<script setup>
  import LivePlayer from '@liveqing/liveplayer-v3'
  console.log(LivePlayer);
  /* export default {
    name: 'LivePlayerDemo',
    components: {
        LivePlayer
    },
    mounted() {
        console.log("12312");
    }
} */
  /* const state = reactive({
    rtmpUrl: 'rtmp://192.168.254.205:1935/rtp/34020000111320000001_34020000111320000001/'
  }) */
</script>
<style lang='scss' scope>
</style>