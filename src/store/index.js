import { createStore } from 'vuex'
import demo from './demo'

export default createStore({
  
  state() {
    return {
      message: "",
      videoList: []
    }
  },

  //修改state函数
  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload.a
    },
    ADD_VIDEO(state, payload) {
      const videoList = state.videoList
      if(videoList.some((itme) => itme.id === payload.id)) return
      videoList.push({
        id: payload.id
      })
    },
    DELETE_VIDEO(state, id) {
      //debugger
      const videoList = state.videoList
      for(let [index, video] of videoList.entries()) {
        if(video.id === id) {
          videoList.splice(index, 1)
        }
      }
    }
  },

  //提交的mutation可以包含任意异步操作
  actions: {},
  //类似于vue中的计算属性
  getters: {},
  //将store分割成模块（module）,应用较大时使用
  modules: {
    demo
  }
})
