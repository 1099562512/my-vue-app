import { createStore } from 'vuex'
import demo from './demo'

export default createStore({
  
  state() {
    return {
      message: ""
    }
  },

  //修改state函数
  mutations: {
    SET_MESSAGE(state, payload) {
      state.message = payload.a
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
