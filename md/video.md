## 常见的直播协议
  - RTMP: 底层基于TCP， 在浏览器端依赖flash
  - HTTP-FLV: 基于HTTP流式IO传输FLV， 浏览器可直接播放FLV无需插件
  - websocket-FLV: 基于 WebSocket 传输 FLV，依赖浏览器支持播放 FLV。WebSocket 建立在 HTTP 之上，建立 WebSocket 连接前还要先建立 HTTP 连接
  - HLS:  Http Live Streaming，苹果提出基于 HTTP 的流媒体传输协议。HTML5 可以直接打开播放。

