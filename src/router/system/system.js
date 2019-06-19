const SystemMain = () => import(/* webpackChunkName:'system' */ '@/views/public/submain'); //系统页面主体

const SystemWelcome = () => import(/* webpackChunkName:'system' */ '@/views/system/welcome'); //系统欢迎页面

const SystemAuthManagement = () => import(/* webpackChunkName:'system' */ '@/views/system/auth_management'); //权限管理

const SystemLocation = () => import(/* webpackChunkName:'system' */ '@/views/system/location'); //飞行定位


export default({
	path: 'system',
	meta: {
		requireAuth: true
	},
	name: 'SystemMain',
	component: SystemMain,
	children: [
		{
			//系统欢迎页面
			path: 'welcome',
			name: 'SystemWelcome',
			component: SystemWelcome
		},
		{
			//权限管理
			path: 'auth-management',
			name: 'SystemAuthManagement',
			component: SystemAuthManagement
		},
		{
			//飞行定位
			path: 'location',
			name: 'SystemLocation',
			component: SystemLocation
		}
	]
});