import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
// import List from '../components/dzy_details/dzy_details.vue'
// import Wenxiong from '../components/dzy_details/wenxiong/wenxiong.vue'
// import Maoyi from '../components/dzy_details/maoyi/maoyi.vue'
// import Yongyi from '../components/dzy_details/yongyi/yongyi.vue'
// 购物车
import CarComponent from '../components/car/car.vue'
// 登录注册
import LoginComponent from '../components/login/login.vue'
import RegisterComponent from '../components/register/register.vue'
//我的..
import MineComponent from '../components/mine/mine.vue'
import WalletComponent from '../components/myWallet/myWallet.vue'
// 搜索
// import SearchComponent from '../components/search/search.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	hashbang: true,
  	history: true,
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		children: []
	},
	// {
	// 	path:'/search',
	// 	name:'search',
	// 	component:SearchComponent
	// },
	{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path:'/register',
		name:'register',
		component:RegisterComponent
	},{
		path:'/car',
		name:'car',
		component:CarComponent,
	},{
		path:'/mine',
		name:'mine',
		component:MineComponent,
		children:[]
	}
	// ,{
	// 	path:'/list',
	// 	name:'list',
	// 	component:List,
	// 	children:[{
	// 		path:'/wenxiong',
	// 		name:'wenxiong',
	// 		component:Wenxiong
	// 	},{
	// 		path:'/maoyi',
	// 		name:'maoyi',
	// 		component:Maoyi
	// 	},{
	// 		path:'/yongyi',
	// 		name:'yongyi',
	// 		component:Yongyi
	// 	}]
	// },{
	// 	path:'myWallet',
	// 	name:'myWallet',
	// 	component:WalletComponent
	// }
	]
})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router