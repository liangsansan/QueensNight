var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var bodyParser = require('body-parser');

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
    //查找所有商品
    app.post('/getProduct',urlencodedParser,function(request,response){
        response.setHeader("Access-Control-Allow-Origin","*");
        DB.get('products',{},function(result){
                console.log(result,"result")
            response.send(result)
            
        })
    });
    app.post('/addProducts', urlencodedParser, function(request, response){
        response.setHeader("Access-Control-Allow-Origin","*");
        DB.addProducts('products', request.body, 'qnTitle', function(data){
            if(data){
                response.send(apiResult(true,'提交成功'))
            }else{
                response.send(apiResult(false, 'qnTitle重复，提交失败'))
            }
        })
    });
}