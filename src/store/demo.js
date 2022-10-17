export default {
  namespaced: true,
  state() {
    return {
      message: "demo"
    }
  },
  mutations: {
    SET_MESSAGE(state, payload) {
      console.log(state);
      state.message = payload.a
    }
  }
}