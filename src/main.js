import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'

import store from '@/store'
import { createPinia } from 'pinia'

import '@/design/index.less';

const app = createApp(App)

//console.log(store);
app.use(Router)
.use(store)
.use(createPinia())
.mount('#app')