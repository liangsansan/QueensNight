<template>
	<div class="rs-container">
		<dk-header></dk-header>
		<div class="rs-body">
			<dk-nav></dk-nav>
			<div class="rs-content">
				<router-view class="dk-viewer"></router-view>
			</div>
		</div>
		<div class="rs-footer">@rs</div>
	</div>	
</template>

<script type="text/javascript">
	import './home.scss'
	import nav from './nav/nav.vue'
	import header from './header/header.vue'

	export default {
		components: {
			'dk-nav': nav,
			'dk-header': header
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