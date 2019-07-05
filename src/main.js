import Vue from 'vue'
import App from './App.vue'

// 引入初始化样式表
import './assets/css/lib/reset';

//router
import router from './router/index'

//vuex
import store from './vuex/store'

//axios
import axios from 'axios';

//echarts
import echarts from 'echarts';
Vue.prototype.$echarts = echarts;



//引入ElementUI
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//引入fly组件
import fly from './components/index';
Vue.use(fly);

let pending = [];
let	cancelToken = axios.CancelToken;
let	cancelPending = (config) => {
	pending.forEach((item, index) => {
		if(!!config){
			if(item.u == config.url){
				item.f(); //取消请求
				pending.splice(index, 1); //移除当前请求记录
			};
		}else{
			item.f(); //取消请求
			pending.splice(index, 1); //移除当前请求记录
		}
	});
};

//验证登录状态
router.beforeEach((to, from, next) => {
	//如果是需要验证登录状态的页面
	if(to.matched.some(record => record.meta.requireAuth)){
		let token = localStorage.getItem('token');
		//如果已经登录，则正常进入
		if(!!token){
			cancelPending();
			next();
		}else{
			next({'name': 'login', 'query': {'redirect': to.fullPath}});
		};
	}else if(to.name == 'login'){ //如果是登录页，则验证如果当前是登录状态自动跳转至系统主页，否则正常进入登录页
		let token = localStorage.getItem('token');
		//如果已经登录，则重定向至系统首页
		if(!!token){
			router.push({'name': 'SystemWelcome'});
		}else{
			next();
		};
	}else{ //其他页面正常进入
		next();
	};
});


//axios 请求拦截器
axios.interceptors.request.use(config => {
	let token = localStorage.getItem('token');
    if (!!token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = `token ${token}`;
    };
    cancelPending(config);
    config.cancelToken = new cancelToken((c) => {
    	pending.push({'u': config.url, 'f': c});
    });
    return config;
}, err => {
    return Promise.reject(err);
});
//响应拦截器
axios.interceptors.response.use(response => {
	cancelPending(response.config);
    return response;
}, error => {
    if (error.response) {
        switch (error.response.status) {
            case 401:
                // 返回 401 清除token信息并跳转到登录页面
                localStorage.removeItem('token');
                router.push({'name': 'login', 'query': {'redirect': router.currentRoute.fullPath}});
        }
    }
    return {data: {}};  // 返回接口返回的错误信息
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
