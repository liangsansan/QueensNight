<template>
    <div id="search">
          <div class="search_top">
            <div class="search_part">
                <router-link to="/"><i class="iconfont icon-fanhui"></i></router-link>
                <div class="d_s_i_box">
                    <div class="d_s_i_b1">
                        <input type="text" placeholder="搜索" class="d_s_input" @keyup.enter='search'/>
                         <i class="iconfont icon-sousuo-sousuo" @click='search'></i>
                    </div>
                </div>
                <i class="iconfont icon-xiao46" @click='select'></i>
            </div>
        </div>
        <div class="search_main">
            <div class="select_pop">
                <ul class="search_sort" v-show='sortShow'>
                    <li>价格从低到高</li>
                    <li>价格从高到低</li>
                    <li>人气从低到高</li>
                    <li>人气从高到低</li>
                    <li>销量从低到高</li>
                    <li>销量从高到低</li>
                </ul>
            </div>
            <ul class="search_list">
                <li v-for="(item,index) in this.data ">
                  <img v-lazy='baseUrl+item.qnDetailsImg[0]' @click="$router.push({name:'details',query:{name:item}})"> 
                </li>
                <!--<li><img src="../../assets/ly-use/details/cup1.jpg"> </li>
                <li><img src="../../assets/ly-use/details/cup1.jpg"> </li>
                <li><img src="../../assets/ly-use/details/cup1.jpg"> </li>
                <li><img src="../../assets/ly-use/details/cup1.jpg"> </li>-->
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
    import './../../assets/iconfont/iconfont.css'
    import $ from 'jquery'
    import './search.scss'
    import http from '../../utils/HttpClient.js'
    // 引进全局地址
    import base from '../../../global.js'
    import Vue from 'vue'
	import VueLazyload from 'vue-lazyload'

	Vue.use(VueLazyload, {
		error: base.lyimgUrl+'error.jpg',
		loading: base.lyimgUrl+'loading.gif',
		try: 3 // default 1
	})


    export default{
        components:{

        },
        data(){
            return {
                baseUrl:base.imgUrl,
                sortShow:'',
                data:{}
            }
        },

        methods:{
            search(){
                let keyword=$('.d_s_input').val()
                if(!keyword){
                    $.alert('请输入你想要的宝贝！')
                }else{
                    // 发送请求搜索数据库
                    http.post('search',{keyword:keyword}).then(response=>{

                       console.log(response.data)
                   })
                }
            },
            select(){
                // $.alert('正在赶工中...')
                this.sortShow=!this.sortShow
            }

        },
        created(){
            // 判断是否有关键字
            let keyword=this.$route.query.keyword
            if(keyword){
               http.post('search',{keyword:keyword}).then(response=>{
                    this.data=response.data;
                   console.log(response.data)

               })

            }
        }
    }
</script>