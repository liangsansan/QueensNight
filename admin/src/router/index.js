import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import list from '../components/product/list/list.vue'
import add from '../components/product/add/add.vue'
import remove from '../components/product/remove/remove.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/admin/list',
		name: 'home',
		component: HomeComponent,
		children: [{
			path: '/admin/list',
			name: 'list',
			component: list
		},{
			path: '/admin/add',
			name: 'add',
			component: add
		},{
			path: '/admin/remove',
			name: 'remove',
			component: remove
		}]
	},{
		path: '/admin/login',
		name: 'login',
		component: LoginComponent
	}]
})

// 对将要进入的路由进行权判断
router.beforeEach((to, from, next) =>{
	// console.log(to);
	// if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
	// 	router.replace('login');
	// 	next();
	// } 
	next();
})

export default router