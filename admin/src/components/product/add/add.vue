<template>
    <div>
        <div class="dk-toolbar" style="background: #fff;">
			<a href="javascript:" class="btn btn-primary btn-sm">保存</a>
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
                            <input id="title" type="text" name="name" v-model="dataform.name" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品原价</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="primaryPrices" type="text" name="name" v-model="dataform.primary" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">折扣优惠</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="discountPrices" type="text" name="name" v-model="dataform.discount" class="form-control required">
                        </div>
                    </div>
                </div>,
                <div class="form-group">
                                                     
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品售量</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="volume" type="text" name="tel" v-model="dataform.volume" class="form-control required">
                        </div>
                    </div>   
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">文胸尺码</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="size" type="text" name="identityno" v-model="dataform.size" class="form-control required">
                        </div>
                    </div>                                   
                </div>  
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品分类</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select id="classify" v-model="dataform.classify" class="form-control required">
                                <option value="文胸">文胸</option>
                                <option value="内裤">内裤</option>
                                <option value="居家">家居</option>
                                <option value="塑身">塑身</option>
                                <option value="泳衣">泳衣</option>
                                <option value="特惠">特惠</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">首页分类</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <select id="homeClass" v-model="dataform.homeClass"  name="gender" class="form-control required">
                                <option value="新款专区">新款专区</option>
                                <option value="爆款专区">爆款专区</option>
                                <option value="折扣专区">折扣专区</option>
                                <option value="特惠专区">特惠专区</option>
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
                            <input id="brand" type="text" name="identityno" v-model="dataform.identityno" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">所属系列</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="series" type="text" name="identityno" v-model="dataform.identityno" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">货品编号</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="coding" type="text" name="identityno" v-model="dataform.identityno" class="form-control required">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">罩杯杯面</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="cup" type="text" name="identityno" v-model="dataform.cup" class="form-control required">
                        </div>
                    </div>
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">适合场合</span>
                    </div>
                    <div class="col-sm-2">
                        <div class="dk-form-element">
                            <input id="occasion" type="text" name="identityno" v-model="dataform.occasion" class="form-control required">
                        </div>
                    </div>
                </div>
                <h4>商品多项分类</h4>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">商品颜色</span>
                    </div>
                    <label class="checkbox1" v-for="obj in dataColor">
                        <input type="checkbox">
                        <span id="spanObj">{{obj}}</span>
                    </label>
                </div>
                <div class="form-group">
                    <div class="col-sm-1">
                        <span class="col-sm-12 control-label">罩杯大小</span>
                    </div>
                    <label class="checkbox1" v-for="size in dataSize">
                        <input type="checkbox">
                        <span>{{size}}</span>
                    </label>
                </div>


                <h4>商品轮播图上传</h4>
                <div class="form-group">
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                     <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                </div>
                <h4>商品轮播图上传</h4>
                <div class="form-group" style="margin-top:20px;">
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                     <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
                        </div>
                    </div>
                    <div class="col-sm-3">
                        <div class="dk-form-element">
                            <input type="file" name="photos" />
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
    import './add.scss'
    import $ from 'jquery'
    export default {
        data(){
            return {
                dataform: {
                    name:'',
                    primary:'',
                    discount:'',
                    volume:'',
                    size:'',
                    classify:'',
                    homeClass:'',
                    brand:'',
                    series:'',
                    coding:'',
                    cup:'',
                    occasion:''
                },
                dataColor:['黑色','红色','紫色','粉色','白色','豹纹','蓝色','绿色','橙色','黄色'],
                 dataSize:['70A','75A','80B','85B','90C','95C','100D','105D']
            }
        },
        created(){
            // this.$parent.$emit('dk','hehe')
            var self = this;
            console.log(self)
            var tools = {
                add: {
                    text: '保存',
                    event: () => {
                        if(!$(this.$refs.clientForm).valid()){
                            return false;
                        }
                        http.post('Employee/Save', self.dataform)
                        .then(response => {
                            if(response.status){
                                $.alert('保存成功!', function(){
                                    router.push({name: 'clients'});
                                })
                            } else {
                                $.alert(response.msg);
                            }
                        })
                    },
                },
                back: {
                    text: '返回',
                    class: 'btn-goback',
                    event: () => {
                        router.push({name: 'clients'})
                    }
                }
            }
            this.$parent.addTool(tools);
        }
    }
</script>