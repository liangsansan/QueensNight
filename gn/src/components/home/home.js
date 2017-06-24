
import Swiper from '../../assets/swiper/swiper-3.4.2.min.js'
import http from '../../utils/HttpClient'
import Vue from 'vue'
import router from '../../router/index'

const state = {
    
}

const mutations = {
	// login: (data, formData) => {
	// 	if(formData.username == 'dk' && formData.password == 'dk'){
	// 		router.push({name: 'home'})
	// 	} else {
	// 		formData.grant_type = 'password'
	// 		http.post('login/index', formData)
	// 		.then(response => {
	// 			router.push({name: 'home'})
	// 		})
	// 	}
	// }

	// 
	search:(data,formData)=>{
			http.get('search', formData)
			.then(response => {
				this.state.data=response.data;
				router.push({name: 'list',params:{formData}})
			})
	},
	homeInfo:(data,formData)=>{
		http.get('homeInfo', formData)
			.then(response => {
				this.state.data=response.data;
				router.push({name: 'home',params:{formData}})
			})
	}

}

const actions = {
	search: (events, formData) => {
		events.commit('search', formData)
	},
	homeInfo:(events,formData)=>{
		events.commit('homeInfo',formData)
	}
}

export default {
	state,
	mutations,
	actions
}
