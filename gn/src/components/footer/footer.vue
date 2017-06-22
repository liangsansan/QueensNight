<template>
	<ul class="foot">
		<li><i class="iconfont icon-home"></i><span>首页</span></li>
		<li><i class="iconfont icon-xiao46"></i><span>商品分类</span></li>
		<li><i class="iconfont icon-konggouwuche"></i><span>购物车</span></li>
		<li><i class="iconfont icon-gerenzhongxin"></i><span>用户中心</span></li>
	</ul>
</template>


<script type="text/javascript">
	import './footer.scss'
	import './../../assets/iconfont/iconfont.css'
	export default {
		components: {
			
		},
		data(){
			return {
				toolList: null
			}
		},
		methods: {
			addTool(arg){
				this.toolList = arg
			},
			click(arg){
				if(arg.event){
					arg.event()
				}
			}
		},
		created(){
			// this.$on('dk', (a) => {
			// 	// this.msg = 'dk'
			// 	console.log(a)
			// })
		}
	}
</script>