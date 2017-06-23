<template>
	<div class="rs-header">
		<ul>
			<li><router-link to="/admin"><img src="../../../assets/imgs/logo.png"/></router-link></li>
		</ul>
		<ul>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					<i class="fa fa-bars"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					<i class="fa fa-envelope"></i>
					<span class="badge badge-primary"> 2</span>
				</router-link>
			</li>
			<li>
				<router-link class="dropdown-toggle count-info" to="/">
					Adminstrator
				</router-link>
			</li>						
		</ul>		
	</div>	
</template>

<script type="text/javascript">
	import './header.scss'
	// import $ from 'jquery'

	export default {
		// methods:{
		// 	nav(event){
		// 		let self = $(event.target);
		// 		if(!self.is('.rs-nav-item')){
		// 			self = self.closest('.rs-nav-item');
		// 		}
		// 		self.toggleClass('active');
		// 	}
		// }
	}
</script>