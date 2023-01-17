## 常见的直播协议
  - RTMP: 底层基于TCP， 在浏览器端依赖flash
  - HTTP-FLV: 基于HTTP流式IO传输FLV， 浏览器可直接播放FLV无需插件
  - websocket-FLV: 基于 WebSocket 传输 FLV，依赖浏览器支持播放 FLV。WebSocket 建立在 HTTP 之上，建立 WebSocket 连接前还要先建立 HTTP 连接
  - HLS:  Http Live Streaming，苹果提出基于 HTTP 的流媒体传输协议。HTML5 可以直接打开播放。


## flv.js

## HLS
 	HLS (HTTP Live Streaming)是Apple的动态码率自适应技术。主要用于PC和Apple终端的音视频服务。包括一个m3u(8)的索引文件，TS媒体分片文件和key加密串文件。参考:HLS。简单来说，HLS是一种协议，如果你的视频源是http://xxxx.m3u8这种，就选择这种协议，.m3u8是个文本文件，直播时，他的内容实时变更，内部指向一个或多个.ts文件。



## **H264(AVC)与H265(HEVC)**

​	都是视频编码，是视频压缩格式，由于视频本身的码流太大，所以需要经过压缩然后再通过网络进行传输，其中H265是H264的升级版，很多播放器无法播放H265视频。

*hls.js*支持*H264*,不支持*H265*