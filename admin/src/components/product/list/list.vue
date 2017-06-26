<template>
    <div class="contianer">
        <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品名称</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="title" type="text" v-model="dataform.qnTitle" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品原价</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="primaryPrices" type="text" v-model="dataform.qnPrimaryPrices" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">折扣优惠</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="discountPrices" type="text" v-model="dataform.qnDiscountPrices" class="form-control required">
                        </div>
                    </div>
                </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>operation</th>
                    <th v-for="(value, key) in dataset[0]" v-if="counts.indexOf(key)>-1">{{key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="obj in dataset">
                    <td>
                        <router-link to="/admin/remove"><span><i class="glyphicon glyphicon-pencil"></i></span></router-link>
                        <span><i class="glyphicon glyphicon-trash"></i></span>
                    </td>
                    <td v-for="(value, key) in obj" v-if="counts.indexOf(key)>-1">{{value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript" src="">
    import './list.scss';
    import $ from 'jquery'
    export default{

        data:function(){
            return {
                dataset:'',
                counts:['qnTitle','qnPrimaryPrices','qnDiscountPrices','qnClassify','qnHomeClass','qnAmount','qnDetailsType','qnDetailsBrand','qnDetailsNum']
            }
        },
        methods:{
           
        },
        created(){
            var self =this;
             $.post('http://localhost:888/getProduct',function(response) {
                console.log(response.data);
                self.dataset = response.data;
            })
                
        }
        //console.log(this.dataset)
    }
</script>