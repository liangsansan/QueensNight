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
                    <input type="checkbox" id="checkbox_a1" class="chk_1" checked>
                    <label for="checkbox_a1"></label>全选
                </div>
                <div class="car_list">
                    <ul>
                        <li>
                            <input type="checkbox" id="checkbox_a2" class="chk_1" checked>
                            <label for="checkbox_a2"></label>
                            <img src="../../assets/imgs/01.jpg" alt="">
                            <span class="car_title">性感内衣</span>
                            
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="car_total">

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

        }
    }

</script>
