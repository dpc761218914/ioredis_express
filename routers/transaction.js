
/**
 * 功能：redis中事务处理
 * 作者： dpc
 * 日期： 2018/5/27.
 */
var redis = require('../config/redisClient');


module.exports = function(app) {

    /**
     * Created by Administrator on 2018/5/27.
     *  参考ioredis文档中事务
     *  APPEND KEY_NAME NEW_VALUE
     */
    app.get('/transaction/set_get', function(req,res){
        redis.multi().set('tarns', 'trans_value').get('tarns').exec(function (err, results) {
            console.log('set_get'+results);
            res.send('set_get：'+results);
        });
    });


};

