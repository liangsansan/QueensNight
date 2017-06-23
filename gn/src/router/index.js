import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import Details from '../components/dzy_details/dzy_details.vue'
import Wenxiong from '../components/dzy_details/wenxiong/wenxiong.vue'

// 登录注册
import LoginComponent from '../components/login/login.vue'
import RegisterComponent from '../components/register/register.vue'
//我的..
import MineComponent from '../components/mine/mine.vue'
import WalletComponent from '../components/myWallet/myWallet.vue'


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
		path: '/login',
		name: 'login',
		// component: LoginComponent
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
		path:'/details',
		name:'details',
		component:Details,
		children:[{
			path:'/wenxiong',
			name:'wenxiong',
			component:Wenxiong
		}]
	},{
		path:'myWallet',
		name:'myWallet',
		component:WalletComponent
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