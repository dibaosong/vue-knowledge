import Layout from '@/views/public/layout';

const ShopDecorate = () => import(/* webpackChunkName:'shop' */ '@/views/shop/decorate'); //装修页面

export default [{
	path: '/shop',
	meta: {
		requireAuth: true
	},
	name: 'Shop',
	component: Layout,
	children: [
		{
			//装修页面
			path: 'decorate',
			name: 'ShopDecorate',
			component: ShopDecorate
		}
	]
}];