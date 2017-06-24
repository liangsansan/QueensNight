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
                        <li>
                            <span class="check" @click="checked"></span>
                            <img src="../../assets/imgs/01.jpg" alt="">
                            <span class="car_title">性感内衣性感内衣性感内衣性感内衣性感内衣v</span>
                            <span class="car_color">颜色：黑色</span>
                            <span class="car_chima">尺码：36D</span>
                            <span class="car_price">188</span>
                            <div class="car_shuliang">
                                <span class="jia iconfont icon-xiaojiantou_shang_mianxing-copy" @click="zeng"></span>
                                <input type="text" class="car_count" value="2">
                                <span class="jian iconfont icon-xiaojiantou_xia_mianxing-copy" @click="shan"></span>
                            </div>
                        </li>
                        <li>
                            <span class="check"></span>
                            <img src="../../assets/imgs/01.jpg" alt="">
                            <span class="car_title">性感内衣性感内衣性感内衣性感内衣性感内衣v</span>
                            <span class="car_color">颜色：黑色</span>
                            <span class="car_chima">尺码：36D</span>
                            <span class="car_price">188</span>
                            <div class="car_shuliang">
                                <span class="jian iconfont icon-xiaojiantou_shang_mianxing-copy"></span>
                                <input type="text" class="car_count" value="2">
                                <span class="jia iconfont icon-xiaojiantou_xia_mianxing-copy"></span>
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
                <span class="total_price">188</span>
            </div>
            <div class="delete">删除</div>
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

    export default {
        components:{
            
        },
        data(){
            return{

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
            checked(){
                $('.check').addClass('check_click');
                $('.check').attr("check","checked");
            },
            zeng(e){
                // let count = event.currentTarget.next().val();
                // let count = event.target.next().val();
                // count ++;
                // console.log(event.currentTarget.next())
            },
            shan(){
                console.log(event.currentTarget)
            }
        }
    }

</script>
