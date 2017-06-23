<template>
    <div class="wenxiong_main">
		<div class="w_m_box" v-for=" item in res">
			<div>{{item}}</div>
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
				res:[1,2,3,4,5]
			}
		},
		methods: {
			even: function (numbers) {
    			return numbers.filter(function (number) {
      				return number % 2 === 0
    			})
 		 	}
		},
		created(){
			$.get('./src/components/dzy_details/shop.json',function(res){
				console.log(this);
			})
		}
	}

</script>