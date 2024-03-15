import { createApp } from 'vue'
import App from './App.vue'
// 引入vue-router核心插件并安装
import router from '@/router/index'
// 引入清除默认样式
import '@/style/style.scss'
// 引入vant
import Vant from 'vant';
// 引入组件样式
import 'vant/lib/index.css';
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入pinia
import pinia from './store/index'
const app = createApp(App);



app.use(pinia)
app.use(router);
app.use(Vant);
app.use(ElementPlus)

app.mount('#app')

