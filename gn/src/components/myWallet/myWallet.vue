<template>
	<div id="wallet" >
		<header>
			<div class="hb-nav">
				<div class="btnl" @click="goback">
					<i class="icon iconfont icon-fanhui"></i>
				</div>
				<span >我的钱包</span>
			</div>
		</header>
		<article>
			<div class="hbmain-content">
				
			</div>
		</article>
    </div>
</template>

<script type="text/javascript">
	import './myWallet.scss'
	import { mapGetters, mapActions } from 'vuex'
	import $ from 'jquery'
	import router from '../../router/index.js'
	export default {
		data:function(){
			return {
				username:localStorage.userName,
				password:''
			}
		},
		methods:{
			goback(){
				router.go(-1)
			}
		}		
			
	}
	
</script>