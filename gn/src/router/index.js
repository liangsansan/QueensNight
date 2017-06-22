import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import Details from '../components/dzy_details/dzy_details.vue'
import Wenxiong from '../components/dzy_details/wenxiong/wenxiong.vue'
Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		// children: [{
		
		// }]
		},{
			path:'/details',
			name:'details',
			component:Details,
			children:[{
				path:'/wenxiong',
				name:'wenxiong',
				component:Wenxiong
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