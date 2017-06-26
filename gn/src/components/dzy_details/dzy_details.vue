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
                <i class="iconfont icon-xiao46" @click="dis(dis1)"></i>
            </div>
        </div>
        <div class="details_main">
            <div class="details_main_top">
                <div class="details_tab swiper-container">
                    <div class="d_t_div swiper-wrapper">
                        <!--router-link会阻止click事件-->
                        <div class="swiper-slide "><router-link to="/wenxiong" class="d_t_text wenxiong" @click.native="checkColor" name="wenxiong">文胸</router-link></div>
                        <div class="swiper-slide "><router-link to="/maoyi" class="d_t_text maoyi" @click.native="checkColor" name="maoyi">毛衣</router-link></div>
                        <div class="swiper-slide "><router-link to="/yongyi" class="d_t_text yongyi" @click.native="checkColor" name="yongyi">泳衣</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text neiku" @click.native="checkColor" name="neiku">内裤</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text siwa" @click.native="checkColor" name="siwa">丝袜</router-link></div>
                        <div class="swiper-slide "><router-link to="#" class="d_t_text zhekou" @click.native="checkColor" name="zhekou">折扣</router-link></div> 
                    </div>
                </div>
            </div>
            <div class="details_main_main">
                <router-view ></router-view>
            </div>
        </div>
        <div class="details_paixu">
            <div class="paixu_jiage" @click="check(priceMax)">价格<i class="iconfont icon-xiaojiantou_xia_mianxing-copy" v-if="priceMax"></i><i class="iconfont icon-xiaojiantou_shang_mianxing-copy" v-if="priceMin"></i></div>
            
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
            this.name1 = this.$route.name ;
            this.classN = '.' + this.name1; 
            
            $(this.classN).addClass('d_t_text_active');
            console.log($(this.classN))
        },
		data(){
			return {
				name1:"",
                classN:'',
                priceMax:false,
                priceMin:true,
                dis1:false,
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
            dis:function(dis1){
                if(!dis1){
                     $('.details_paixu').css('right','0');
                     this.dis1 = !this.dis1;
                     console.log(this)
                }else{
                    
                    $('.details_paixu').css('right','-1rem');
                   this.dis1 = !this.dis1;
                }
                
            },
            check:function(priceMax){
                var res = this.$children[7].res;
                if(!priceMax){
                    
                    
                     for(var i=0;i<res.length;i++){
                         for(var j=0;j<res.length-1;j++){
                             
                             if(res[j].qnDiscountPrices <res[j+1].qnDiscountPrices){
                                    var temp = res[j+1].qnDiscountPrices;//交换元素    
								    res[j+1].qnDiscountPrices = res[j].qnDiscountPrices;    
								    res[j].qnDiscountPrices = temp; 
                             }
                         }
                     }
                     
                     this.priceMax = !this.priceMax;
                     this.priceMin = !this.priceMin;
                     this.$children[7].res = res;
                }else{
                    for(var i=0;i<res.length;i++){
                         for(var j=0;j<res.length-1;j++){
                             
                             if(res[j].qnDiscountPrices > res[j+1].qnDiscountPrices){
                                    var temp = res[j+1].qnDiscountPrices;//交换元素    
								    res[j+1].qnDiscountPrices = res[j].qnDiscountPrices;    
								    res[j].qnDiscountPrices = temp; 
                             }
                         }
                     }
                    this.priceMax = !this.priceMax;
                     this.priceMin = !this.priceMin;
                     this.$children[7].res = res;
                }
            }
            
		},
		updated(){
            
            
		}
	}
   
</script>