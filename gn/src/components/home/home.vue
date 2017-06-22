<template>
	<div class="home_page">
		<div class="home_top">
			<div class="home_logo"></div>
		</div>
		<div class="home_body">

		</div>
	</div>
</template>

<script type="text/javascript">
	import './home.scss'
	
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