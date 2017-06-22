
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
}

const actions = {
	// login: (events, formData) => {
	// 	events.commit('login', formData)
	// }
}

export default {
	state,
	mutations,
	actions
}
