import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
//购物车
import CarComponent from '../components/car/car.vue'

//列表页
import List from '../components/dzy_details/dzy_details.vue'
//详情页
import Details from '../components/list/list.vue'
import Wenxiong from '../components/dzy_details/wenxiong/wenxiong.vue'
import Maoyi from '../components/dzy_details/maoyi/maoyi.vue'
import Yongyi from '../components/dzy_details/yongyi/yongyi.vue'
import Neiku from '../components/dzy_details/Neiku/neiku.vue'
import Siwa from '../components/dzy_details/siwa/siwa.vue'
import Zhekou from  '../components/dzy_details/zhekou/zhekou.vue'

// 登录注册
import LoginComponent from '../components/login/login.vue'
import RegisterComponent from '../components/register/register.vue'
//我的..
import MineComponent from '../components/mine/mine.vue'
import WalletComponent from '../components/myWallet/myWallet.vue'
import AddAdComponent from '../components/address/address.vue'
import AddComponent from '../components/address/add/add.vue'
import changePswComponent from '../components/changePsw/changePsw.vue'


// 搜索
import SearchComponent from '../components/search/search.vue'


Vue.use(VueRouter)

const router = new VueRouter({
	hashbang: true,
  	history: true,
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		children: []
	},{

		path: '/car',
		name: 'car',
		component: CarComponent
	
		},{
		path:'/search',
		name:'search',
		component:SearchComponent

	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path:'/register',
		name:'register',
		component:RegisterComponent
	},{
		path:'/mine',
		name:'mine',
		component:MineComponent,
		children:[]
	},{
		path:'/myWallet',
		name:'myWallet',
		component:WalletComponent
	},{
		path:'/changePsw',
		name:'changePsw',
		component:changePswComponent
	},{
		path:'/address',
		name:'address',
		component:AddAdComponent,
		children:[{
			path:'/address/add',
			name:'add',
			component:AddComponent
		}]
	},{
		path:'/list',
		name:'list',
		component:List,
		children:[{
			path:'/wenxiong',
			name:'wenxiong',
			component:Wenxiong
		},{
			path:'/maoyi',
			name:'maoyi',
			component:Maoyi
		},{
			path:'/yongyi',
			name:'yongyi',
			component:Yongyi
		},{
			path:'/neiku',
			name:'neiku',
			component:Neiku
		},{
			path:'/siwa',
			name:'siwa',
			component:Siwa
		},{
			path:'/zhekou',
			name:'zhekou',
			component:Zhekou
		}]
	},{
		path:'/details',
		name:'details',
		component:Details
	}]	

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