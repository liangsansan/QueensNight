<template>
	<div class="home_page">
		<div class="home_top">
			<div class="home_logo">
				<span>全场满199包邮</span>
			</div>
			<div class="home_search">
				<label for=""><span>搜全场</span><input type="text" placeholder="输入宝贝关键词" @keyup.enter="search" @click="$router.push({name:'details'})" ><i class="iconfont icon-sousuo-sousuo" @click="search" ></i></label>
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
					<li  @click="$router.push({name:'details',query:{keyword:'新款'}})"><img src="../../assets/ly-use/new.png" alt=""><p>新款专区</p></li>
					<li  @click="$router.push({name:'details',query:{keyword:'爆款'}})"><img src="../../assets/ly-use/hot.png" alt=""><p>爆款专区</p></li>
					<li  @click="$router.push({name:'details',query:{keyword:'折扣'}})"><img src="../../assets/ly-use/new.png" alt=""><p>折扣专区</p></li>
					<li  @click="$router.push({name:'details',query:{keyword:'特惠'}})"><img src="../../assets/ly-use/hot.png" alt=""><p>特惠专区</p></li>
				</ul>
			</div>
			<div class="home_select">
				<p>热销商品与个性选择</p>
				<ul>
					<li v-for='item in imgList'>
						
						<img v-lazy='imgUrl+item.imgurl' @click="$router.push({name:'details',query:{series:item.keyword}})">

					</li>
				</ul>
			</div>
			<div class="home_goodsCategory">
				<div class="category_sexy">
					<div class="category_img"><img :src= "imgUrl+'sexy.jpg'" ></div>
					<div class="details_img">
						<ul>
							<li v-for='item in sexyImg'>
								<img v-lazy='detailsImg+item.imgurl' @click="$router.push({name:'details',query:{series:item.keyword}})">
							</li>
							<!--<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>	-->
						</ul>
					</div>
				</div>
				<div class="category_cup">
					<div class="category_img"><img :src= "imgUrl+'cup.jpg'"></div>
					<div class="details_img">
						<div class="left_img">
							<img src="../../assets/ly-use/details/left.jpg" alt="">
						</div>
						<div class="right_img">
							<ul>
								<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
								<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
								<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
							</ul>
						</div>
					</div>
				</div>
				<div class="category_skirt">
					<div class="category_img"><img :src= "imgUrl+'skirt.jpg'"></div>
					<div class="details_img">
						<ul>
							<li v-for='item in skirtImg'>
								<img v-lazy='detailsImg+item.imgurl' @click="$router.push({name:'details',query:{series:item.keyword}})">
							</li>
							<!--<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>	-->
						</ul>
					</div>
				</div>
				<div class="category_girl">
					<div class="category_img"><img :src= "imgUrl+'girl.jpg'"></div>
					<div class="details_img">
						<div class="details_mainImg"><img src="../../assets/ly-use/details/xia.jpg" alt=""></div>
						<ul>
							<li v-for='item in girlImg'>
								<img v-lazy='detailsImg+item.imgurl' @click="$router.push({name:'details',query:{series:item.keyword}})">
							</li>
							<!--<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right1.jpg" alt=""></li>-->
						</ul>
					</div>
				</div>
				<div class="category_sweet">
					<div class="category_img"><img :src= "imgUrl+'sweet.jpg'"></div>
					<div class="details_img">
						<ul>
							<li v-for='item in sweetImg'>
								<img v-lazy='detailsImg+item.imgurl' @click="$router.push({name:'details',query:{series:item.keyword}})">
							</li>
							<!--<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>	-->
						</ul>
					</div>
				</div>
				<div class="category_top">
					<div class="category_img"><img :src= "imgUrl+'top.jpg'"></div>
					<div class="details_img">
						<ul>
							<li v-for='item in topImg'>
								<img v-lazy='detailsImg+item.imgurl' @click="$router.push({name:'details',query:{series:item.keyword}})">
							</li>
							<!--<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right2.jpg" alt=""></li>
							<li><img src="../../assets/ly-use/details/right3.jpg" alt=""></li>	-->
						</ul>
					</div>
				</div>			
			</div>
			<div class="home_more"><span class="more_left">- - - - - -</span> 更多宝贝等你去发现<span class="more_right"> - - - - - -</span> </div>
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
				detailsImg:base.lyimgDetails,
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
					{'imgurl' :"sexy1.jpg",keyword:'升杯聚拢'},
					{'imgurl' :"sexy2.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sexy3.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sexy4.jpg",keyword:'大杯稳固'}		
				],
				cupImg:[
					{'imgurl' :"cup1.jpg",keyword:'升杯聚拢'},
					{'imgurl' :"cup2.jpg",keyword:'大杯稳固'},
					{'imgurl' :"cup3.jpg",keyword:'大杯稳固'},
					{'imgurl' :"cup4.jpg",keyword:'大杯稳固'},
					{'imgurl' :"cup5.jpg",keyword:'大杯稳固'},
					{'imgurl' :"cup6.jpg",keyword:'大杯稳固'},
					
				],
				skirtImg:[
					{'imgurl' :"sweet1.jpg",keyword:'升杯聚拢'},
					{'imgurl' :"sweet2.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet3.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet4.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet5.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet6.jpg",keyword:'大杯稳固'},
					
				],
				girlImg:[
					{'imgurl' :"girl1.jpg",keyword:'升杯聚拢'},
					{'imgurl' :"girl2.jpg",keyword:'大杯稳固'},
					{'imgurl' :"girl3.jpg",keyword:'大杯稳固'},
					{'imgurl' :"girl4.jpg",keyword:'大杯稳固'}	
				],
				sweetImg:[
					{'imgurl' :"sweet1.jpg",keyword:'升杯聚拢'},
					{'imgurl' :"sweet2.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet3.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet4.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet5.jpg",keyword:'大杯稳固'},
					{'imgurl' :"sweet6.jpg",keyword:'大杯稳固'},
				],
				topImg:[
					{'imgurl' :"top1.jpg",keyword:'升杯聚拢'},
					{'imgurl' :"top2.jpg",keyword:'大杯稳固'},
					{'imgurl' :"top3.jpg",keyword:'大杯稳固'},
					{'imgurl' :"top4.jpg",keyword:'大杯稳固'}
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
				}
				// 发送Ajax请求
				// this.$store.dispatch('search', {keyword:keyword})
			},
			// 滚动事件
			 Scroll() {
		        this.scroll = $('.scroll_container').scrollTop()
		       	if(this.scroll>400){
		       		 this.toTopShow=true;
						// console.log(this)	
					this.$parent.getTopShow(this.toTopShow)
					
					// 隐藏logo
					$('.home_logo').slideUp();
		       	}
		       	 if(this.scroll<400){
		       		this.toTopShow=false;
					this.$parent.getTopShow(this.toTopShow)
					// 显示logo
					$('.home_logo').slideDown();
		       	}
		       	// console.log(this.$parent)
	      	}
	  
		},
		created(){
			// 进入首页获取商品
			// this.$store.dispatch('homeInfo',{home:'home'})

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