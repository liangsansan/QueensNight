<template>
    <div class="wenxiong_main">
		<div class="w_m_box">
			<div>5 </div>
		</div>
	</div>
</template>

<script type="text/javascript">
import $ from 'jquery'
import './wenxiong.scss'
	export default {
		components: {
		
		},
		data(){
			return {
				
			}
		},
		methods: {

		},
		created(){
			$.get('./src/components/dzy_details/shop.json',function(res){
				console.log(res);
			})
		}
	}

</script>