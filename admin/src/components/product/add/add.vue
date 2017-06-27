<template>
    <div>
        <div class="dk-toolbar" style="background: #fff;">
			<a href="javascript:" class="btn btn-primary btn-sm" @click="Submit">保存</a>
            <a href="javascript:" class="btn btn-primary btn-sm btn-goback">返回</a>
		</div>
        <div class="dk-form">
            <form ref="clientForm" role="form" class="form-horizontal ng-pristine ng-valid">
                <h4>商品基本信息</h4>
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
                <div class="form-group">
                                                     
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品售量</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="volume" type="text" v-model="dataform.qnAmount" class="form-control required">
                        </div>
                    </div>   
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品分类</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select id="classify" v-model="dataform.qnClassify" class="form-control required">
                                <option v-for="obj in dataClassify">{{obj}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">首页分类</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select id="homeClass" v-model="dataform.qnHomeClass" class="form-control required">
                                <option v-for="obj in dataHomeClass">{{obj}}</option>
                            </select>
                        </div>
                    </div>                         
                </div>  
                <h4>商品详情信息</h4>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品品牌</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="brand" type="text" v-model="dataform.qnDetailsBrand" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">货品编号</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="coding" type="text" v-model="dataform.qnDetailsNum" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">罩杯杯面</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="cup" type="text" v-model="dataform.qnCup" class="form-control required">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">适合场合</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="occasion" type="text" v-model="dataform.qnOccasion" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">所属系列</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select id="homeClass" v-model="dataform.qnDetailsType" class="form-control required">
                                <option v-for="obj in dataDetailsType">{{obj}}</option>
                            </select>
                        </div>
                    </div>
                </div>
                <h4>商品多项分类</h4>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品颜色</span>
                    </div>
                    <label class="checkbox1" v-for="obj in dataColor">
                        <input class="color" type="checkbox">
                        <span>{{obj}}</span>
                    </label>
                </div>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">罩杯大小</span>
                    </div>
                    <label class="checkbox1" v-for="size in dataSize">
                        <input class="size" type="checkbox">
                        <span>{{size}}</span>
                    </label>
                </div>


                <h4>商品轮播图上传</h4>
                <div class="form-group">
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                     <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsImg" />
                        </div>
                    </div>
                </div>
                <h4>商品详情图上传</h4>
                <div class="form-group" style="margin-top:20px;">
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                     <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="qnDetailsTextImg" />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script type="text/javascript">
    import router from '../../../router'
    import http from '../../../utils/HttpClient'
    import erp from '../../../assets/common/erp.js'
    import './add.scss'
    import $ from 'jquery'
    import form from '../../../assets/common/jquery.form.js'

    export default {
        data(){
            return {
                dataform: {
                    qnTitle:'',
                    qnPrimaryPrices:'',
                    qnDiscountPrices:'',
                    qnColor:[],
                    qnSize:[],
                    qnAmount:'',
                    qnClassify:'',
                    qnHomeClass:'',
                    qnDetailsBrand:'',
                    qnDetailsType:'',
                    qnDetailsNum:'',
                    qnCup:'',
                    qnOccasion:''
                },
                dataColor:['黑色','红色','紫色','粉色','白色','豹纹','蓝色','绿色','橙色','黄色','肤色'],
                dataSize:['A','B','C','D','70A','75A','80B','85B','90C','95C','100D','105D'],
                dataClassify:['文胸','内裤','家居','塑身','泳衣','特惠'],
                dataHomeClass:['新款专区','爆款专区','折扣专区','特惠专区',],
                dataDetailsType:['升杯聚拢系列','性感情趣系列','日常系列','大杯稳固系列','无钢托睡眠系列','调整型系列','一片式系列','Hello Kitty']
            }
        },
        methods:{
             Submit: function(){
                var data = this.dataform;
                var color = $('.color')
                color.map(function(index,val){
                   if(color[index].checked){
                       var colorIndex = $(this).next().text();
                       return data.qnColor.push(colorIndex);
                   }
                })
                var size = $('.size')
                size.map(function(index,val){
                   if(size[index].checked){
                       var sizeIndex = $(this).next().text();
                       return data.qnSize.push(sizeIndex);
                   }
                })
                if(confirm('确定上传数据？')){
                    $('form').ajaxSubmit({
                        type: 'post',
                        data: data,
                        dataType: 'json',
                        url: erp.baseUrl　+ 'addProducts',
                        success:function(data){
	                    }
                    })
                    alert('上传成功')
                }
            }
        }
        ,
        created(){
            // this.$parent.$emit('dk','hehe')
        }
    }
</script>