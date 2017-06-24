var DB = require('../module/DBHelper');
var ApiResult = require('../module/ApiResult');
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

exports.Handle=function(app){
    app.get('/search',urlencodedParser,function(request,response){
        DB.getProductsBykeyword('products', request.body, 'keyword', function(data){
			if(data){
				response.send(ApiResult(true,'查找成功',data))
			} else {
				response.send(ApiResult(false, '未找到任何商品'));
			}
		})
    })

}