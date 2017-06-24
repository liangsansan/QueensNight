import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import CarComponent from '../components/car/car.vue'

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
	{
		path: '/car',
		name: 'car',
		component: CarComponent
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