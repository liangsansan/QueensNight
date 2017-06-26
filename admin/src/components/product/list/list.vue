<template>
    <div class="contianer">
        <div class="col-sm-4"><label>商品名称&nbsp;<input type="text" v-model="title"></label></div>
        <div class="col-sm-4"><label>货品编号&nbsp;<input type="text" v-model="detailsNum"></label></div>
        <div class="col-sm-2"><input type="button" class="btn btn-info" value="搜索" @click="search"></div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>operation</th>
                    <th v-for="(value, key) in dataset[0]" v-if="counts.indexOf(key)>-1">{{key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj, index) in dataset">
                    <td>
                        <router-link to="/admin/remove"><span><i class="glyphicon glyphicon-pencil"></i></span></router-link>
                        <span style="cursor:pointer"><i class="glyphicon glyphicon-trash" @click="del" :id="obj._id"></i></span>
                    </td>
                    <td v-for="(value, key) in obj" v-if="counts.indexOf(key)>-1">{{value}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script type="text/javascript" src="">
    import './list.scss'
    import erp from '../../../assets/common/erp.js'
    import $ from 'jquery'
    export default{
        props:['id'],
        data:function(){
            return {
                title: '',
                detailsNum: '',
                dataset: '',
                dataStatus: '',
                counts: ['qnTitle','qnPrimaryPrices','qnDiscountPrices','qnClassify','qnHomeClass','qnAmount','qnDetailsType','qnDetailsBrand','qnDetailsNum']
            }
        },
        methods:{
           search: function(){
                var _dataset = [];
                for(var index in this.dataStatus){
                    var obj = this.dataStatus[index];
                    var _result = (
                        (!this.title || obj.qnTitle.indexOf(this.title) > -1)
                        && (!this.detailsNum || obj.qnDetailsNum.indexOf(this.detailsNum) > -1)
                    );

                    if(_result){
                        _dataset.push(obj);
                    }
                }
                // console.log(_dataset);
                this.dataset = _dataset;
            },
            del:function(event){
                var id = event.target.id;
                if(confirm('确定删除？')){
                    var relf = this;
                    $.ajax({
                        type: 'post',
                        url:erp.baseUrl+'dels',
                        data:{"_id":id},
                        success:function(response){
                            console.log(response);
                        }
                    })
                    window.location.reload();
                }
            },
            // del:function(event){
			// 	var id=event.target.id
			// 	var r=confirm('确定删除？')
			// 	if(r){
			// 		var self=this
			// 		$.ajax({
			// 			type:'get',
			// 			url:erp.baseUrl+'del',
			// 			data:{"id":id},
			// 			success:function(response){
			// 				$.alert(response.message)
			// 				$.ajax({
			// 					type:'get',
			// 					url:erp.baseUrl+'getGoodsdata',
			// 					success:function(response){
			// 						console.log(response)
			// 						for(var i=0;i<response.data.length;i++){
			// 							var name='';
			// 							response.data[i].name.map(function(item,index){
			// 								name+=item+','
			// 								return name;
			// 							})
			// 							response.data[i].name=name.slice(0,-1);

			// 							var price='';
			// 							response.data[i].price.map(function(item,index){
			// 								price+=item+','
			// 								return price;
			// 							})
			// 							response.data[i].price=price.slice(0,-1);

			// 							var characteristic='';
			// 							response.data[i].characteristic.map(function(item,index){
			// 								characteristic+=item
			// 								return characteristic;
			// 							})
			// 							response.data[i].characteristic=characteristic;
			// 						}
			// 						self.page=Math.ceil(response.data.length/4)
			// 						self.data=response.data;
			// 						self.number=4
			// 						self.dataOrigin=response.data;
			// 					},
			// 					error:function(err){
			// 							console.log(err)
			// 					}	
			// 				})        
			// 			},
			// 			error:function(response){
			// 				console.log(response);
			// 			}
			// 		})
			// 	}
			// }

        },
        created(){
            var self =this;
             $.post('http://localhost:888/getProduct',function(response) {
                // console.log(response.data);
                self.dataset = response.data;
                self.dataStatus = response.data;
            })
        }
        //console.log(this.dataset)
    }
</script>