<template>
    <div class="car_all">
        <div class="car_top">
            <i class="iconfont icon-fanhui" onClick="javascript :history.back(-1);"></i>
            <p>购物车</p>
        </div>
        <div class="car_main">
            <div class="car_msg">
                购物车还没有商品哦<br><br>
                <router-link to="/">先去逛逛吧</router-link>
            </div>
            <div class="car_show">
                <div class="car_allcheck">
                    <span class="all_check" @click="allcheck"></span>全选
                </div>
                <div class="car_list">
                    <ul>
                        
                        <li v-for="(item, index) in products[0]">
                            <span class="check" @click="checked"></span>
                            <img src="../../assets/imgs/01.jpg" alt="">
                            <span class="car_title">{{item.qnTitle}}</span>
                            <span class="car_color">颜色：{{item.qnColor[0]}}</span>
                            <span class="car_chima">尺码：{{item.qnSize[0]}}</span>
                            <span class="car_price">{{item.qnPrimaryPrices}}</span>
                            <div class="car_shuliang">
                                <span class="jia iconfont icon-xiaojiantou_shang_mianxing-copy" @click="zeng"></span>
                                <input type="text" class="car_count" v-model="qty">
                                <span class="jian iconfont icon-xiaojiantou_xia_mianxing-copy" @click="shan"></span>
                            </div>
                        </li>
                        <li v-for="(item, index) in products[0]">
                            <span class="check" @click="checked"></span>
                            <img src="../../assets/imgs/01.jpg" alt="">
                            <span class="car_title">{{item.qnTitle}}</span>
                            <span class="car_color">颜色：{{item.qnColor[0]}}</span>
                            <span class="car_chima">尺码：{{item.qnSize[0]}}</span>
                            <span class="car_price">{{item.qnPrimaryPrices}}</span>
                            <div class="car_shuliang">
                                <span class="jia iconfont icon-xiaojiantou_shang_mianxing-copy" @click="zeng"></span>
                                <input type="text" class="car_count" v-model="qty">
                                <span class="jian iconfont icon-xiaojiantou_xia_mianxing-copy" @click="shan"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="car_total">
            <div class="car_heji">
                <i class="iconfont icon-gouwuche"></i>
                <span class="total_msg">合计：</span>
                <span class="total_price">{{totalPrice}}</span>
            </div>
            <div class="delete" @click="Delete">删除</div>
            <div class="car_gopay">
                去结算
            </div>
        </div>
    </div>
</template>

<script>
    import './car.scss'
    import './car.js'
    import $ from 'jquery'
    import http from '../../utils/HttpClient'

    export default {
        components:{
            
        },
        computed:{
            totalPrice:function (){
                var aa = $('.check[check]').next('.car_price').html()
                console.log(aa)
                return aa
            }
        },
        data(){
            return{
                products:[],
                qty:12
            }
        },
        methods:{
            allcheck(){
                if($('.all_check').hasClass('check_click')){
                    $('.all_check').removeClass('check_click');
                    $('.check').removeClass('check_click');
                    $('.all_check').removeAttr("check");
                    $('.check').removeAttr("check");
                }else{
                    $('.all_check').addClass('check_click');
                    $('.check').addClass('check_click');
                    $('.all_check').attr("check","checked");
                    $('.check').attr("check","checked");
                }
            },
            checked(event){
                var self = $(event.target);
                if(self.hasClass('check_click')){
                    self.removeClass('check_click');
                    self.removeAttr("check");
                }else{
                    self.addClass('check_click');
                    self.attr("check","checked");
                }
            },
            zeng(event){
                // console.log(event.target)
                // var cal = $(event.target);
                // let count = cal.next().val();
                // count ++;
                // console.log(count)
                this.qty++
                console.log($('.check'))
            },
            shan(){
                // console.log(event.currentTarget)
                // let aa = $('.check[check]').parent('li').detach()
                // console.log(aa)
                this.qty--
            },
            Delete(){
                $('.check[check]').parent('li').detach()
            }
            
        },
        created:function(){
            // $.post('http://localhost:888/' +  'getProduct', {}, function(response){
            //     // console.log(response.data)
            //     // var data = response.data
            //     this.products.push(response.data);
            // }.bind(this))
            http.post('getProduct', {})
				.then(response => {
                    // if(response.state){
					// 	this.products.push(response.data);
					// }
					// console.log(response.data)
                    this.products.push(response.data);
				})

        }
    }

</script>
