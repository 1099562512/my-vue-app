import { createApp } from 'vue'
import App from './App.vue'
import Router from './router'
// import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

import '@/design/index.less';

const app = createApp(App)

app.use(Router)
.mount('#app')