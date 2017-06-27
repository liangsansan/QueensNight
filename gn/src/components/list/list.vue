<template>
    <div class="list_container">
        <div class="list_top_box">
            <router-link to="/wenxiong"><i class="iconfont icon-fanhui list_comeback"></i></router-link>
            <div class="list_top_title">
                <div class="list_title_text">{{this.res.qnTitle}}</div>
            </div>
            <div class="list_share"><i class="iconfont icon-fenxiang list_share" @click="shareBox"></i></div>
        </div>
        <div class="list_container_box">
            <div class="list_container">
                <div class="list_lunbo">
                    <div class="swiper-container swiper_box1">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide swiper_box2" v-for=" attr in res.qnDetailsImg">
                                <img :src="src1 + attr" class="Lunboimg"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="list_content_box">
                    <div class="list_content">
                        <div class="l_content">{{res.qnTitle}}</div>
                        <div class="l_c_maxP">${{res.qnDiscountPrices}}<span class="l_c_hc">{{res.qnHomeClass}}</span></div>
                        <div class="l_c_minP">价格:<span class="sp1">${{res.qnPrimaryPrices}}</span></div>
                        
                    </div>
                    <div class="list_content_love">
                        <div class="l_c_love">
                            <i class="iconfont icon-shoucang" @click="love"></i>
                        </div>
                    </div>
                    
                </div>
                <div class="list_content_box2">
                    <div class="l_c_b2_color">
                        <div class="color_text">颜色:</div>
                        <div class="color_class" >
                            <div v-for="attr in res.qnColor" class="c_c details_color"  @click="select_color">
                                {{attr}}
                            </div>
                        </div>
                    </div>
                    <div class="l_c_b2_color">
                        <div class="color_text">尺码:</div>
                        <div class="color_class">
                            <div v-for="attr in res.qnSize" class="c_c details_size" @click="select_size">
                                {{attr}}
                            </div>
                        </div>
                    </div>
                    <div class="l_c_b2_color">
                        <div class="color_text">数量:</div>
                        <button class="btn btn btn-warning" @click="jianshaoNum">-</button>
                        <input class="shop_input" type="num" name="shop_num" value="1" disabled/>
                        <button class="btn btn btn-warning" @click="addNum">+</button>
                    </div>
                </div>
                <div class="list_content_box3">
                    <div class="list_select_box">
                        <div class="list_select list_img" @click="select">图文详情</div>
                        <div class="list_select list_text" @click="select">商品详情</div>
                    </div>
                    <div class="img_details">
                        <div class="i_d_box" v-for=" attr in res.qnDetailsTextImg">
                            <img :src="src1 + attr"  class="i_d_img"/>
                        </div>
                    </div>
                    <div class="text_details">
                        <div class="t_d_box" ><div class="t_d_b_text">品牌：</div><div class="t_d_b_data">{{res.qnDetailsBrand}}</div></div>
                        <div class="t_d_box" ><div class="t_d_b_text">所属分类：</div><div class="t_d_b_data">{{res.qnDetailsType}}</div></div>
                        <div class="t_d_box" ><div class="t_d_b_text">货品编号：</div><div class="t_d_b_data">{{res.qnDetailsNum}}</div></div>
                        <div class="t_d_box" ><div class="t_d_b_text">杯面：</div><div class="t_d_b_data">{{res.qnCup}}</div></div>
                        <div class="t_d_box" ><div class="t_d_b_text">适合场合：</div><div class="t_d_b_data">{{res.qnOccasion}}</div></div>
                        <div class="t_d_box" ><div class="t_d_b_text">罩杯厚度：</div><div class="t_d_b_data">{{res.qnPly}}</div></div>
                        <div class="t_d_box" ><div class="t_d_b_text">杯型：</div><div class="t_d_b_data">{{res.qnCupType}}</div></div>
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="list_share_box" @click="boxDis">
            <div class="list_share" @click.stop="share">
                <div class="list_share_child share_qqkzone">
                    <i class="iconfont icon-qqkongjian"></i>
                    <p>QQ空间</p>
                </div>
                <div class="list_share_child share_weibo">
                    <i class="iconfont icon-xinlangweibo"></i>
                    <p>新浪微博</p>
                </div>
                <div class="list_share_child share_qqweibo">
                    <i class="iconfont icon-4"></i>
                    <p>腾讯微博</p>
                </div>
                <div class="list_share_child share_weixin">
                    <i class="iconfont icon-weixin"></i>
                    <p>微信</p>
                </div>
            </div>
        </div>
        <div class="list_shop_car">
            <button class="list_buy btn btn-danger" @click="buy">加入购物车</button>
        </div>
        
    </div>
</template>

<script type="text/javascript">
import './list.scss'
import $ from 'jquery'
import base from'../../../global.js'
import './../../assets/swiper/swiper-3.4.2.min.css'
import Swiper from './../../assets/swiper/swiper-3.4.2.min.js'
import './../../assets/bootstrap/css/bootstrap.css'
export default {
		components: {
			
		},
        
        created(){
            if(this.$route.query.name.length!=undefined){
                console.log(this.res);
                return;
            }else{
                console.log(1);
                this.res = this.$route.query.name;
            }
        },
       
		data(){
			return {
                res:{},
                src1:base.imgUrl,
                lover:false,
                Listselect:false,
                selectColor:'',
                selectZize:'',
                buyDetails:{
                    title:'',
                    price:'',
                    size:'',
                    color:'',
                    num:1,
                    imgUrl:'',
                }
			}
		},
        beforeUpdate(){
            // console.log(1);
        },
		methods: {
            shareBox:function(){
                $('#foot').css('display','none');
                $('.list_share_box').css('display','block');
            },
            share:function(){
                console.log(this.res);
            },
            boxDis:function(){
                $('#foot').css('display','block');
                $('.list_share_box').css('display','none');
            },
            love:function(e){
                if(this.lover){
                    $(e.target).css('color','#000');
                    this.lover  = !this.lover;
                }else{
                   $(e.target).css('color','red'); 
                   this.lover  = !this.lover;
                }
                
            },
            buy:function(){
                if(this.selectColor == '' || this.selectZize==''){
                    alert('请选择颜色或尺码');
                }else{
                    alert('购买成功');
                    this.buyDetails.title = this.res.qnTitle;
                    this.buyDetails.price = this.res.qnDiscountPrices;
                    this.buyDetails.imgUrl = this.res.qnDetailsImg[0];
                    if(!localStorage.buy){
                        var aa = [];
                        aa.push(this.buyDetails);
                        localStorage.buy = JSON.stringify(aa);
                        console.log(JSON.parse(localStorage.buy));
                        
                    }else{
                        
                        var aa = JSON.parse(localStorage.buy);
                        var onOff = false;
                        aa.map(function(i){
                            if(i.title == this.buyDetails.title){
                                i.num = parseInt(i.num) +  parseInt(this.buyDetails.num);
                                onOff =true;
                                localStorage.buy = JSON.stringify(aa);
                                console.log(JSON.parse(localStorage.buy));
                            }
                            return;
                        }.bind(this));
                        console.log(onOff);
                        if(onOff){
                            return;
                        }else{
                                aa.push(this.buyDetails);
                                localStorage.buy = JSON.stringify(aa);
                                console.log(JSON.parse(localStorage.buy));
                        }
                    }

                }
            },
            select:function(e){
                
                if(e.target.className.indexOf('list_img')!= -1){
                    $('.list_img').css('background','#ff9999');
                    $('.list_img').css('color','#fff');
                    $('.list_text').css('background','#fff');
                    $('.list_text').css('color','#000');
                    $('.text_details').css('display','none');
                    $('.img_details').css('display','block');
                }else{
                    $('.list_text').css('background','#ff9999');
                    $('.list_text').css('color','#fff');
                    $('.list_img').css('background','#fff');
                    $('.list_img').css('color','#000');
                    $('.img_details').css('display','none');
                    $('.text_details').css('display','block');
                }
            },
            select_color:function(e){
                $('.details_color').map(function(item){
                    $(this).css('border','1px solid #c1c1c1');
                    $(this).css('color','#000'); 
                })
                
                $(e.target).css('border','1px solid red');
                $(e.target).css('color','red');
                this.selectColor = $(e.target)[0].innerText;
                this.buyDetails.color = $(e.target)[0].innerText;
            },
            select_size:function(e){
                $('.details_size').map(function(item){
                    
                    $(this).css('border','1px solid #c1c1c1');
                    $(this).css('color','#000'); 
                })
                $('.details_text').css('color','#000'); 
                $(e.target).css('border','1px solid red');
                $(e.target).css('color','red')
                this.selectZize = $(e.target)[0].innerText;
                this.buyDetails.size = $(e.target)[0].innerText;
            },
            addNum:function(){
                if($('.shop_input')[0].value==99){
                    return;
                }else{
                    console.log(parseInt($('.shop_input')[0].value));
                    var num = parseInt($('.shop_input')[0].value);
                    num += 1;
                    $('.shop_input')[0].value = num;
                    this.buyDetails.num = num;
                }
                
            },
            jianshaoNum:function(){
                if($('.shop_input')[0].value==1){
                    return;
                }else{
                    var num = parseInt($('.shop_input')[0].value);
                    num -= 1;
                    $('.shop_input')[0].value = num;
                    this.buyDetails.num = num;
                }
               
            }
            
		},
		mounted(){
            
            var mySwiper = new Swiper ('.swiper-container', {
                //一行显示几个
                slidesPerView: 1,
            
                //要不要居中显示
                cancelable:true,
                paginationClickable: true,
                grabCursor: true
            }) 
            
		},
        updated(){
            console.log(this.res,444);
        }
	}
</script>