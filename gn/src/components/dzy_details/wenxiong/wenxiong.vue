<template>
    <div class="wenxiong_main">
		<router-link to="#">
			<div class="w_m_box" v-for=" item in max(res)" v-if="classify==item.qnClassify">
				<div class="w_m_img_box" >
					<!--
						请将ajax数据放在data里面！！！
					-->
					<img :src= "src1 + item.qnDetailsImg[0]"  class="w_m_img"/>
					<p class="w_m_p">{{item.qnTitle}}</p>
					
					<div class="w_m_p_box"><span class="w_m_maxPri">${{item.qnDiscountPrices}}</span><span class="w_m_minPri">${{item.qnPrimaryPrices}}</span><span class="w_m_homeclass">{{item.qnHomeClass}}!</span></div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script type="text/javascript">
import $ from 'jquery'
import './wenxiong.scss'
import base from'./base.js'
	export default {
		components: {
		
		},
		data(){
			return {
				res:{},
				classify:'内衣',
				da:'',
				src1:base.base,
				
			}
		},
		methods: {
			max: function (arr) {
    			    var len = arr.length;    
					for (var i = 0; i < len; i++) {    
						for(var j = 0; j < len - i -1; j++){    
							if(arr[j]>arr[j+1]){  //相邻元素进行对比    
								var temp = arr[j+1];//交换元素    
								arr[j+1] = arr[j];    
								arr[j] = temp;    
							}    
						}    
					}
					
					return arr;
 		 	}
		},																				
		created(){
			$.get('./src/components/dzy_details/shop.json',function(res){
				var aa = [];
				for(var i = 0;i<=res.length-1;i++){
					if(res[i].qnClassify == this.classify){
						aa.push(res[i]);
					}
					
				}
				
				this.res = aa;
				
				
			}.bind(this))
		}
	}

</script>