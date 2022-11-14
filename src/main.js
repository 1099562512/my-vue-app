import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
import store from '@/store'
import { createPinia } from 'pinia'
import axios from 'axios'

import '@/design/index.less';

const app = createApp(App)

/* axios.get('/api/getMenu').then(res => {
  console.log(res);
}) */
fetch('/api/getMenu').then(res => res.json()).then(data => {
  console.log(data);
})

//console.log(store);
app.use(Router)
.use(store)
.use(createPinia())
.mount('#app')