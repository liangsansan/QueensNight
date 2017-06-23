<template>
    <div class="details_container">
        <div class="details_top">
            <div class="details_search">
                <router-link to="/"><i class="iconfont icon-fanhui"></i></router-link>
                <div class="d_s_i_box">
                    <div class="d_s_i_b1">
                        <input type="text" placeholder="搜索一下" class="d_s_input"/>
                         <i class="iconfont icon-sousuo-sousuo"></i>
                    </div>
                </div>
                <i class="iconfont icon-xiao46"></i>
            </div>
        </div>
        <div class="details_main">
            <div class="details_main_top">
                <div class="details_tab swiper-container">
                    <div class="d_t_div swiper-wrapper">
                        <!--router-link会阻止click事件-->
                        <div class="swiper-slide "><router-link to="/wenxiong" class="d_t_text d_t_text_active" @click.native="checkColor">文胸</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text" @click.native="checkColor">毛衣</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text" @click.native="checkColor">泳衣</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text" @click.native="checkColor">内裤</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text" @click.native="checkColor">丝袜</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text" @click.native="checkColor">折扣</router-link></div> 
                    </div>
                </div>
            </div>
            <div class="details_main_main">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './../../assets/iconfont/iconfont.css'
    import  './dzy_details.scss'
  import './../../assets/swiper/swiper-3.4.2.min.css'
  import Swiper from './../../assets/swiper/swiper-3.4.2.min.js'
import $ from 'jquery'

	export default {
		components: {
			
		},
        mounted(){
            var mySwiper = new Swiper ('.swiper-container', {
                //一行显示几个
                slidesPerView: 3,
                //要不要居中显示
                centeredSlides: false,
                paginationClickable: true,
                grabCursor: true
            }) 
        },
		data(){
			return {
				
			}
		},
        beforeUpdate(){
            // console.log(1);
        },
		methods: {
            checkColor:function(e){
                $('.d_t_text').map(function(i){
                    
                    this.classList.remove('d_t_text_active');
                })
                e.target.classList.add('d_t_text_active');
                
            },
            
		},
		created(){

		}
	}
   
</script>