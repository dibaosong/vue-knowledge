import axios from 'axios';

axios.defaults.timeout = 10000;

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

if (process.env.NODE_ENV == 'development') { 
 axios.defaults.baseURL = '/';
} else if (process.env.NODE_ENV == 'production') { 
 axios.defaults.baseURL = '/';
}

export default {
	//封装 axios get请求
	get(url, data){
		return new Promise((resolve, reject) => {
			axios.get(url, {
				params: data
			}).then((res) => {
				resolve(res);
			}, (error) => {
				reject(error)
			})
		})
	},
	//封装 axios post请求
	post(url, data){
		return new Promise((resolve, reject) => {
			axios.post(url, data).then((res) => {
				resolve(res);
			}, (error) => {
				reject(error)
			})
		})
	}
}