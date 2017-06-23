<template>
	<div class="home_page">
		<div class="home_top">
			<div class="home_logo">
				<span>全场满199包邮</span>
			</div>
			<div class="home_search">
				<label for=""><span>搜全场</span><input type="text" placeholder="输入宝贝关键词" @keyup.enter="search"><i class="iconfont icon-sousuo-sousuo" @click="search" ></i></label>
			</div>
		</div>
		<div class="home_body">
			<div class="home_banner">
				<!--swiper-->
				<div class="swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><img src="../../assets/ly-use/select4.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../../assets/ly-use/select1.jpg" alt=""></div>
						<div class="swiper-slide"><img src="../../assets/ly-use/select5.jpg" alt=""></div>
					</div>
					<!-- 如果需要分页器 -->
					<div class="swiper-pagination"></div>

					<!-- 如果需要导航按钮 -->
					<!--<div class="swiper-button-prev"></div>-->
					<!--<div class="swiper-button-next"></div>-->

					<!-- 如果需要滚动条 -->
					<!--<div class="swiper-scrollbar"></div>-->
				</div>
				
			</div>
			<div class="home_class">
				<ul>
					<li><img src="../../assets/ly-use/new.png" alt=""><p>新款专区</p></li>
					<li><img src="../../assets/ly-use/hot.png" alt=""><p>爆款专区</p></li>
					<li><img src="../../assets/ly-use/new.png" alt=""><p>折扣专区</p></li>
					<li><img src="../../assets/ly-use/hot.png" alt=""><p>特惠专区</p></li>
				</ul>
			</div>
			<div class="home_select">
				<p>热销商品与个性选择</p>
				<ul>
					<li><img src="../../assets/ly-use/select1.jpg" alt=""></li>
					<li><img src="../../assets/ly-use/select2.jpg" alt=""></li>
					<li><img src="../../assets/ly-use/select3.jpg" alt=""></li>
					<li><img src="../../assets/ly-use/select4.jpg" alt=""></li>
					<li><img src="../../assets/ly-use/select5.jpg" alt=""></li>
					<li><img src="../../assets/ly-use/select6.jpg" alt=""></li>
					<li><img src="../../assets/ly-use/select7.jpg" alt=""></li>
					<li><img src="../../assets/ly-use/select8.jpg" alt=""></li>
				</ul>
			</div>
			<div class="home_goodsCategory">
				<div class="category_one">
					<div class="category_img"><img src="../../assets/ly-use/cup.jpg" alt=""></div>
					<div class="details_img">
						<div class="left_img"><img src="../../assets/ly-use/details/left.jpg" alt=""></div>
						<div class="right_img">
							<ul>
								<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
								<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
								<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="category_two">
					<div class="category_img"><img src="../../assets/ly-use/girl.jpg" alt=""></div>
					<div class="details_img">
						<div class="details_mainImg"><img src="../../assets/ly-use/details/xia.jpg" alt=""></div>
						<ul>
							<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>
						</ul>
					</div>
				</div>
				<div class="category_three">
					<div class="category_img"><img src="../../assets/ly-use/sexy.jpg" alt=""></div>
					<div class="details_img">
						<ul>
							<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>	
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import './home.scss'
	import './home.js'
	import $ from 'jquery'

	export default {
		components: {
			
		},
		data(){
			return {
				toolList: null
			}
		},
		methods: {
			// 搜索功能
			search(){
				let keyword=$('.home_search').find('input').val();
				// console.log(keyword)

				// 发送Ajax请求
				// $.get('')
			}
		},
		created(){
				// getGoods(){

				// }

			// login(event){
			// 	if($('form').valid()){
			// 		this.$store.dispatch('login', {username: this.username, password: this.pwd})
			// 	}
			// }
		},
		mounted(){
				// 轮播图插件
				let mySwiper = new Swiper ('.swiper-container', {
						direction: 'horizontal',
						loop: true,
						autoplay : 3000,
						pagination : '.swiper-pagination',
						paginationType : 'bullets',
						// 跳转页面
						preventClicks : true,//默认true
						// 这样，即使我们滑动之后， 定时器也不会被清除
		　				autoplayDisableOnInteraction : false,
					})
		}
	}
</script>