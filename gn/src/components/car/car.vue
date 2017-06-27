<template>
    <div class="car_all">
        <div class="car_top">
            <i class="iconfont icon-fanhui" onClick="javascript :history.back(-1);"></i>
            <p>购物车</p>
        </div>
        <div class="car_main">
            <div class="car_msg" v-if="products.length">
                购物车还没有商品哦<br><br>
                <router-link to="/">先去逛逛吧</router-link>
            </div>
            <div class="car_show">
                <div class="car_allcheck">
                    <span class="all_check" @click="selectAll" :class="{check_click:isSelectAll}"></span>全选
                    <span class="unall_check" @click="unselectAll" v-if="isSelectAll">取消全选</span>
                </div>
                <div class="car_list">
                    <ul id="list_content">
                        <li v-for="(item, index) in products">
                            <span class="check" @click="selectGood(item)" :class="{check_click:item.isChecked}"></span>
                            <img src="../../assets/imgs/01.jpg" alt="">
                            <span class="car_title">{{item.qnTitle}}</span>
                            <span class="car_color">颜色：{{item.qnColor[0]}}</span>
                            <span class="car_chima">尺码：{{item.qnSize[0]}}</span>
                            <span class="car_price">{{item.qnPrimaryPrices}}</span>
                            <div class="car_shuliang">
                                <span class="jia iconfont icon-xiaojiantou_shang_mianxing-copy" @click="changeQuentity(item,1,index)"></span>
                                <input type="text" class="car_count" :value="item.qnAmount" disabled>
                                <span class="jian iconfont icon-xiaojiantou_xia_mianxing-copy" @click="changeQuentity(item,-1,index)"></span>
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
            <div class="delete" @click="ifDelete">删除</div>
            <div class="car_gopay">
                去结算
            </div>
        </div>
        <div class="car_window" v-if="askDelete">
            <div class="ask">
                <div><span class="ask_close">X</span></div>
                <div class="ask_text" @click="notDelete">您确定要删除所选商品吗？</div>
                <div class="ask_btn">
                    <span class="ask_yes" @click="goDelete">确定</span>
                    <span class="ask_no" @click="notDelete">不了</span>
                </div>
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
        data(){
            return{
                products:[],
                isSelectAll:false,
                askDelete:false
            }
        },
        methods:{
            selectAll(){
                this.isSelectAll = true;
                this.products.forEach((good)=>{
                    good.isChecked = true;
                });
		    },
            unselectAll(){
                this.isSelectAll = false;
                this.products.forEach((good)=>{
                    good.isChecked = false;
                })
		    },
            selectGood(goodObj,index){
                if(goodObj.isChecked == void 0){
                    this.$set(goodObj,"isChecked",true)
                } else {
                    goodObj.isChecked = !goodObj.isChecked;
                }
                this.isCheckAll();
		    },
            isCheckAll(){
                var flag = true;
                this.products.forEach(function(good){
                    if(!good.isChecked){
                        flag = false;
                    }
                });
                if(!flag){
                    this.isSelectAll = false;
                } else {
                    this.isSelectAll = true;
                }
		    },
            changeQuentity(good,val,_index){
                if(good.qnAmount == 1 && val == -1 ){
                    alert('商品数量不能小于1')
                } else {
                    var qty = Number(good.qnAmount)
                    qty += val;
                    good.qnAmount = qty	
                    // var aa = document.getElementById("list_content")
                    // var bb = aa.getElementsByTagName("*")
                    // console.log(bb.length)
                }
		    },
            goDelete(){
                this.askDelete = false;
                // 使用传统写法
                // 遍历商品列表删除所有选中的
                this.products.forEach(function(item,index,_list){
                    if(item.isChecked){
                        _list.splice(index,1);
                    }
                });
            },
            notDelete(){
                this.askDelete = false;
            },
            ifDelete(){
                // check是否至少选中一件商品
                var isSelectedGood = this.products.some(function(item){
                    return item.isChecked;
                });
                // 如果没有选中则弹框警告
                if(!isSelectedGood){
                    alert("请至少选择一件商品!");
                } else {
                    this.askDelete = true;
                }
		    }
            
        },
        watch:{
            // var parent = document.getElementById("list_content")
            // var child = parent.getElementsByTagName("*")
            // console.log(child.length)
        },
        computed:{
            // var parent = document.getElementById("list_content")
            // var child = parent.getElementsByTagName("*")
            // console.log(child.length)
            totalPrice:function(){
                var total = 0;
                this.products.forEach(function(good){
                    if(good.isChecked){
                        total += good.qnPrimaryPrices * good.qnAmount;
                    }
                });
                return total;
                
		    },
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
                    this.products=response.data;
				})

        }
    }

</script>
