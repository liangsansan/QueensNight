<template>
	<div :class="['rs-nav-content', navOpen ? '' : 'toggle']" ref="dknav">
		<ul class="rs-nav">
			<li class="rs-nav-item nav-toggle">
				<a class="btn btn-primary" href="javascript:" @click="toggleNav">
					<i class="fa fa-bars"></i> 
				</a>
			</li>
			<li class="rs-nav-item" @click="toggleNavItem">
				<a href="javascript:">
					<i class="fa fa-file-o"></i>
					<span>商品界面</span>
					<i class="fa fa-angle-left"></i>
				</a>
				<ul class="rs-sub-nav">
					<li><router-link to="/admin/list">管理商品</router-link></li>
					<li><router-link to="/admin/add">添加商品</router-link></li>
					<!--<li><router-link to="/">删除商品</router-link></li>
					<li><router-link to="/">修改商品</router-link></li>-->
				</ul>
			</li>
			<li class="rs-nav-item" @click="toggleNavItem">
				<a href="javascript:">
					<i class="fa fa-cog"></i>
					<span>系统设置</span>
					<i class="fa fa-angle-left"></i>
				</a>
				<ul class="rs-sub-nav">
					<li><router-link to="/">修改密码</router-link></li>
					<li><router-link to="/">修改信息</router-link></li>
					<!--<li><router-link to="/">权限设置</router-link></li>
					<li><router-link to="/">模块设置</router-link></li>-->
				</ul>
			</li>					
		</ul>
	</div>	
</template>

<script type="text/javascript">
	import './nav.scss'
	import $ from 'jquery'

	export default {
		data(){
			return {
				navOpen: true
			}
		},
		methods:{
			toggleNavItem(event){
				if(!this.navOpen){
					this.navOpen = true;
				}
				let self = $(event.target);
				if(self.closest('.rs-sub-nav')[0]){
					return;
				}
				if(!self.is('.rs-nav-item')){
					self = self.closest('.rs-nav-item');
				}
				self.toggleClass('active');
			},
			toggleNav(event){
				this.navOpen = !this.navOpen;
				$('.rs-nav-item').removeClass('active');
			}
		}
	}
</script>