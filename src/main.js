import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import store from '@/store'
import { createPinia } from 'pinia'
import axios from 'axios'
import '@/design/index.less';
import { useAllDirective } from '@/directive/index.js'

const app = createApp(App)

/* axios.get('/api/getMenu').then(res => {
  console.log(res);
}) */
fetch('/api/getMenu').then(res => res.json()).then(data => {
  console.log(data);
})

useAllDirective(app)
app.provide('message', '欢迎来到我的私人系统')
//app.config.globalProperties.msg = "全局属性" //对vue2的Vue.prototype替代

app.use(Router)
.use(store)
.use(createPinia())
.mount('#app')