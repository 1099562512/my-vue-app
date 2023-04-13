import { toRefs, reactive, onMounted, onUnmounted } from 'vue'

export const useMouse = () => {
  const state = reactive({x:0,y:0});
  const update = e =>{
      state.x = e.pageX;
      state.y = e.pageY;
  }
  onMounted(()=>{
    window.addEventListener('mousedown',update);
  })
  onUnmounted(()=>{
    window.removeEventListener('mousedown',update);
  })

  return toRefs(state);
}