var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var bodyParser = require('body-parser');
var multer = require ('multer');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, '../gn/src/assets/imgs/')  
  },  
  filename: function (req, file, cb) {  
      var fileFormat = (file.originalname).split(".");
      cb(null, file.fieldname + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);    
  }  
}) 
var upload = multer({ storage: storage })
var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Register = function(app){
    app.post('/login', urlencodedParser, function(request, response){
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            DB.get('userData', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(!data[0]){
                        response.send(ApiResult(false, '用户名不存在！'));
                    } else if(data[0].password != request.body.password){
                        response.send(ApiResult(false, '密码错误！'));
                    } else {
                        response.send(ApiResult(true));
                    }
                }
            })
        }
    });

    app.post('/register', urlencodedParser, function(request, response){
        console.log(request.body)
        if(!request.body || !request.body.username){
            response.send(ApiResult(false, '用户名不能为空！'));
        } else if(!request.body || !request.body.password){
            response.send(ApiResult(false, '密码不能为空！'));
        } else {
            delete request.body.repassword;
            DB.get('userData', {username: request.body.username}, function(result){
                if(!result.status){
                    response.send(result);
                } else {
                    var data = result.data;
                    if(data[0]){
                        response.send(ApiResult(false, '用户名已被注册'));
                    } else {
                        DB.insert('userData', request.body, function(insertResult){
                            response.send(insertResult);
                        })
                    }
                }
            })
        }        
    });
    // id查询获取商品
	app.post('/getProduct', urlencodedParser, function(request, response){
		response.setHeader("Access-Control-Allow-Origin","*");
		DB.getProduct('products', request.body, 'id', function(data){
			if(data){
				response.send(ApiResult(true,'查找成功',data))
			} else {
				response.send(ApiResult(false, '商品ID错误'));
			}
		})
	});


    //查找所有商品
    app.post('/getProduct',urlencodedParser,function(request,response){
        response.setHeader("Access-Control-Allow-Origin","*");
        DB.get('products',{},function(result){
            response.send(result)
            
        })
    });

    //添加商品(上传图片)
    app.post('/addProducts', upload.fields([{ name:'qnDetailsImg', maxCount: 10 },{name: 'qnDetailsTextImg',maxCount: 10}]), function(request, response) {
        var bannerImg = [];
        var detailsImg = [];
        if(request.files.qnDetailsImg){
            request.files.qnDetailsImg.map(function(item,index){
                return bannerImg.push(item.filename)
            })
            request.body.qnDetailsImg = bannerImg;
        }
        if(request.files.qnDetailsTextImg){
            request.files.qnDetailsTextImg.map(function(item,index){
                return detailsImg.push(item.filename)
            })
            request.body.qnDetailsTextImg = detailsImg;
        }
        console.log(request.body)
        DB.addProducts('products', request.body, 'qnTitle', function(data){
            if('qnTitle' != '' || data){
                response.send(ApiResult(true,'提交成功'))
            }else{
                response.send(ApiResult(false, 'qnTitle重复，提交失败'))
            }
        }) 
    });
}