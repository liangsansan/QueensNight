<template>
	<div id="foot">
		<div class="toTop"><i class="iconfont icon-fanhuidingbu1" @click='toTop' v-show="show"></i></div>
		<ul class="foot">
			<li><router-link :to="{name:'home'}" exact><i class="iconfont icon-home"></i><span>首页</span></router-link></li>
			<li><router-link :to="{name:'details'}"><i class="iconfont icon-xiao46"></i><span>商品分类</span></router-link></li>
			<li><router-link :to="{name:'home'}"><i class="iconfont icon-konggouwuche"></i><span>购物车</span></router-link></li>
			<li><router-link :to="{name:'home'}"><i class="iconfont icon-gerenzhongxin"></i><span>用户中心</span></router-link></li>
		</ul>
	</div>

</template>


<script type="text/javascript">
	import './footer.scss'
	import './../../assets/iconfont/iconfont.css'
	import $ from 'jquery'


	export default {
		components: {
			
		},
		data(){
			return {
				show:'true'
			}
		},
		methods: {
			toTop(event){
			
				console.log($('#main'))
			}
		},
		created(){
			
		}
	}
</script>