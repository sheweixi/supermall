import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
// 引入echarts
import echarts from 'echarts'


Vue.prototype.$echarts = echarts 

//引入全局组件
// import Head from './components/Head'
//注册全局组件
// Vue.component("greeting",Head)
Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,


  render: h => h(App)
}).$mount('#app')
axios.all([axios()])