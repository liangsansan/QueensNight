<template>
	<div>
		<h1>111</h1>
	</div>
</template>


<script type="text/javascript">
	import './footer.scss'

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