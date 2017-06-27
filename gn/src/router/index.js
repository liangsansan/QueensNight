import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import CarComponent from '../components/car/car.vue'
// 登录注册
import LoginComponent from '../components/login/login.vue'
import RegisterComponent from '../components/register/register.vue'
//我的..
import MineComponent from '../components/mine/mine.vue'
import WalletComponent from '../components/myWallet/myWallet.vue'
import AddAdComponent from '../components/address/address.vue'
import AddComponent from '../components/address/add/add.vue'
import changePswComponent from '../components/changePsw/changePsw.vue'


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