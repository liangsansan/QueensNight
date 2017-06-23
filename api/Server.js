var express = require('express');
var Router = require('./router/RootRouter')

var app = Router.Register(express);
app.listen(888);
console.log('开启成功 端口888')