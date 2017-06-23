var ApiResult = require('./ApiResult')

var MongoDB = require('mongodb');
var MongoDBServer = new MongoDB.Server('localhost', 27017);
var db = new MongoDB.Db('QueensNight', MongoDBServer);

module.exports = {
    get: function(_collection, _condition, _callback){
        console.log(_condition);
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }
            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.find().toArray(function(resulterror, dataset){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));    
                    } else {
                        _callback(ApiResult(true, null, dataset));
                    }
                })
            })
            db.close();
        })
    },
    insert: function(_collection, _newdata, _callback){
        db.open(function(dberror){
            if(dberror){
                _callback(ApiResult(false, null, dberror));
                return;
            }

            db.collection(_collection, function(collerror, collection){
                if(collerror){
                    _callback(ApiResult(false, null, collerror));
                    return;
                }
                collection.insert(_newdata, function(resulterror, result){
                    if(resulterror){
                        _callback(ApiResult(false, null, resulterror));
                    } else {
                        _callback(ApiResult(true, null, result));
                    }
                })
            })
            db.close();
        })
    },

    // id查询商品
    getProduct : function(_collection, data, key, callback){
        db.open(function(error, db){
            if(error){
                console.log('connect db:', error);
		    }
            //_collection=>cake => 集合名（表名）
            console.log('data',data)
            db.collection(_collection, function(error, collection){
                if(error){
                    console.log(error)	
                } else {
                    var obj = {};
                    obj[key] = data[key];
                    collection.find(obj).toArray(function(err, docs){
                        if (docs.length>=1) {
                            callback(docs);
                        }else{
                            callback();
                        }
                    })
                }
                db.close();
            })
        })	
    },
    //添加商品
    addProducts: function(_collection,data,key,callback){
        db.open(function(error,db){
            if(error){
                console.log('db:',error);
            }
            db.collection(_collection,function(error,collection){
                var id_obj = {};
                title_obj[key] = data[key];
                console.log(id_obj);
                collection.find(title_obj).toArray(function(error,docs){
                    console.log(docs.length);
                    if(docs.length >=1){
                        callback();
                        db.close();
                    }else{
                        var obj = {};
                        for(var key in data){
                            obj[key] = data[key];
                        }
                        collection.insert(obj);
                        callback(data);
                        db.close();
                    }
                })
            })
        })
    }
}