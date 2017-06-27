<template>
	<div id="foot">
		<transition name="toTop"><div class="toTop" v-show="show"><i class="iconfont icon-fanhuidingbu1" @click='backtop'></i></div></transition>
		<ul class="foot">
			<router-link :to="{name:'home'}" exact><li><i class="iconfont icon-home"></i><span>首页</span></li></router-link>
			<router-link :to="{name:'list'}"><li><i class="iconfont icon-xiao46"></i><span>商品分类</span></li></router-link>
			<router-link :to="{name:'register'}"><li><i class="iconfont icon-konggouwuche"></i><span>购物车</span></li></router-link>
			<router-link :to="{name:'mine'}"><li><i class="iconfont icon-gerenzhongxin"></i><span>用户中心</span></li></router-link>
		</ul>
	</div>
</template>


<script type="text/javascript">
	import './footer.scss'
	import './../../assets/iconfont/iconfont.css'
	import $ from 'jquery'


	export default {
		components: {
			name:'foot'
			
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
					// console.log(isshow)
					this.show=isshow;

			},
			
		}
	}
</script>