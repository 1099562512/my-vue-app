import { ref } from "vue";
/* export let state1 = reactive({
  count: 0
})
export const addCount = () => {
  state1.count++
}
export const clearCount = () => {
  state1.count = 0
}

export const startPoller = (message) => {
   return setInterval(() => {
    console.log(message);
   }, 1000);
}
export const endPoller = (poller) => {
  poller && clearInterval(poller)
}
 */
class Demo {
  _count = ref(0)
  addCount() {
    this._count.value++
  }
  clearCount() {
    this._count.value = 0
  }
}

export default Demo
