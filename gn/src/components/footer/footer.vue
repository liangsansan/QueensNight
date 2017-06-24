<template>
	<div id="foot">
		<div class="toTop"><transition name="toTop"><i class="iconfont icon-fanhuidingbu1" @click='backtop' v-show="show"></i></transition></div>
		<ul class="foot">
			<li><router-link :to="{name:'home'}" exact><i class="iconfont icon-home"></i><span>首页</span></router-link></li>
			<li><router-link :to="{name:'details'}"><i class="iconfont icon-xiao46"></i><span>商品分类</span></router-link></li>

			<li><router-link :to="{name:'car'}"><i class="iconfont icon-konggouwuche"></i><span>购物车</span></router-link></li>
			<li><router-link :to="{name:'mine'}"><i class="iconfont icon-gerenzhongxin"></i><span>用户中心</span></router-link></li>
		</ul>
	</div>
</template>


<script type="text/javascript">
	import './footer.scss'
	import './../../assets/iconfont/iconfont.css'
	import $ from 'jquery'


	export default {

		name:'foot',

		components: {
			
		},
		data(){
			return {
				top:'',
				show:'',
				scroll:''
			}
		},
		methods: {
			backtop(){
	      		$('.scroll_container').animate({scrollTop:0},300)
			},
			getTopShow(isshow){
					// console.log(ishow)
					this.show=isshow;
			}
		},
		created(){
		},
		beforeUpdate(){
			
		}
		
	}
</script>