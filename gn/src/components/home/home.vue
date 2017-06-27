<template>
	<div class="home_page">
		<div class="home_top">
			<div class="home_logo">
				<span>全场满199包邮</span>
			</div>
			<div class="home_search">

				<label for=""><span>搜全场</span><input type="text" placeholder="输入关键词" @keyup.enter="search"><i class="iconfont icon-sousuo-sousuo" @click="search" ></i></label>

			</div>
		</div>
		<div class="home_body  scroll_container " @scroll="Scroll" >
			<div class="home_banner">
				<!--swiper-->
				<div class="swiper-container">
					<!--<li v-for='img in imgList'>
						<img v-lazy='lyimgurl+img'>
					</li>-->
					<div class="swiper-wrapper" >
						<div class="swiper-slide" v-for='img in bannerImg'>
							<img :src='imgUrl+img'>
						</div>
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

					<li  @click="$router.push({name:'wenxiong',query:{keyword:'新款'}})"><img src="../../assets/ly-use/new.png" alt=""><p>新款专区</p></li>
					<li  @click="$router.push({name:'yongyi',query:{keyword:'爆款'}})"><img src="../../assets/ly-use/hot.png" alt=""><p>爆款专区</p></li>
					<li  @click="$router.push({name:'zhekou',query:{keyword:'折扣'}})"><img src="../../assets/ly-use/new.png" alt=""><p>折扣专区</p></li>
					<li  @click="$router.push({name:'neiku',query:{keyword:'特惠'}})"><img src="../../assets/ly-use/hot.png" alt=""><p>特惠专区</p></li>

				</ul>
			</div>
			<div class="home_select">
				<p>热销商品与个性选择</p>
				<ul>

					<li v-for='item in imgList'>
						

					</li>
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

			<div class="home_more"><span class="more_left">- - - - - -</span> 更多宝贝等你来发现<span class="more_right"> - - - - - -</span> </div>

		</div>
	</div>
</template>

<script type="text/javascript">
	import './home.scss'
	import './home.js'
	import $ from 'jquery'
	// 图片懒加载
	import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'
	// 引进全局地址
	import base from '../../../global.js'

	Vue.use(VueLazyload, {
		error: base.lyimgUrl+'error.jpg',
		loading: base.lyimgUrl+'loading.gif',
		try: 3 // default 1
	})

	export default {
		name:'home',
		components: {
			
		},
		data(){
			return {
				scroll:'',
				toTopShow:'',
				imgUrl:base.lyimgUrl,
				bannerImg:[

					"banner1.jpg",
					"banner2.jpg"
				],
				imgList:[
					{'imgurl' :"series1.jpg",keyword:'升杯聚拢'},
					{'imgurl' :"series2.jpg",keyword:'大杯稳固'},
					{'imgurl' :"series3.jpg",keyword:'一片式'},
					{'imgurl' :"series4.jpg",keyword:'无钢托睡眠'},
					{'imgurl' :"series5.jpg",keyword:'日常'},
					{'imgurl' :"series6.jpg",keyword:'Hello Kitty'},
					{'imgurl' :"series7.jpg",keyword:'调整型'},
					{'imgurl' :"series8.jpg",keyword:'性感情趣'}	
				],
				sexyImg:[
					{'imgurl' :"sexy1.jpg",keyword:'homesexy1'},
					{'imgurl' :"sexy2.jpg",keyword:'homesexy2'},
					{'imgurl' :"sexy3.jpg",keyword:'homesexy3'},
					{'imgurl' :"sexy4.jpg",keyword:'homesexy4'}		
				],
				cupImg:[
					{'imgurl' :"cup1.jpg",keyword:'homecup1'},
					{'imgurl' :"cup2.jpg",keyword:'homecup2'},
					{'imgurl' :"cup3.jpg",keyword:'homecup3'},
					{'imgurl' :"cup4.jpg",keyword:'homecup4'},
					{'imgurl' :"cup5.jpg",keyword:'homecup5'},
					{'imgurl' :"cup6.jpg",keyword:'homecup6'},
					
				],
				skirtImg:[
					{'imgurl' :"skirt1.jpg",keyword:'homeskirt1'},
					{'imgurl' :"skirt2.jpg",keyword:'homeskirt2'},
					{'imgurl' :"skirt3.jpg",keyword:'homeskirt3'},
					{'imgurl' :"skirt4.jpg",keyword:'homeskirt4'}
				],
				girlImg:[
					{'imgurl' :"girl1.jpg",keyword:'homegirl1'},
					{'imgurl' :"girl2.jpg",keyword:'homegirl2'},
					{'imgurl' :"girl3.jpg",keyword:'homegirl3'},
					{'imgurl' :"girl4.jpg",keyword:'homegirl4'}	
				],
				sweetImg:[
					{'imgurl' :"sweet1.jpg",keyword:'homesweet1'},
					{'imgurl' :"sweet2.jpg",keyword:'homesweet2'},
					{'imgurl' :"sweet3.jpg",keyword:'homesweet3'},
					{'imgurl' :"sweet4.jpg",keyword:'homesweet4'},
					{'imgurl' :"sweet5.jpg",keyword:'homesweet5'},
					{'imgurl' :"sweet6.jpg",keyword:'homesweet6'},
				],
				topImg:[
					{'imgurl' :"top1.jpg",keyword:'hometop1'},
					{'imgurl' :"top2.jpg",keyword:'hometop2'},
					{'imgurl' :"top3.jpg",keyword:'hometop3'},
					{'imgurl' :"top4.jpg",keyword:'hometop4'}

				]
			}
		},
		methods: {
			// 搜索功能
			search(){
				let keyword=$('.home_search').find('input').val();
				// console.log(keyword)
				if(!keyword){
					$.alert('请输入你想要找的宝贝！')
				}else{
					this.$router.push({name:'search',query:{keyword:keyword}})
				}

			},
			// 滚动事件
			 Scroll() {
		        this.scroll = $('.scroll_container').scrollTop()
		       	if(this.scroll>400){
		       		 this.toTopShow=true;
						// console.log(this.$parent)
					this.$parent.getTopShow(this.toTopShow)
		       	}
		       	 if(this.scroll<400){
		       		this.toTopShow=false;
					this.$parent.getTopShow(this.toTopShow)
		       	}
		       	// console.log(this.$parent)
	      	},
	  
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
		},
		beforeDestroy(){
			this.$parent.getTopShow(false)
			$('.scroll_container').scrollTop(0)

		}
	}
</script>