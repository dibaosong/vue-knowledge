import Vue from 'vue'
import App from './App.vue'

// 引入初始化样式表
import './assets/css/lib/reset';

//router
import router from './router/index'

//vuex
import store from './vuex/store'


//echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;



//引入ElementUI
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//引入fly组件
import fly from './components/index';
Vue.use(fly);

import './system/permission' //权限控制


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
