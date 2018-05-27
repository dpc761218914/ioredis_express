
/**
 * 功能：pub_sub
 * 作者： dpc
 * 日期： 2018/5/27.
 * 发布订阅未测试成功
 */
var redis = require('../config/redisClient');




module.exports = function(app) {


    /**
     * Created by Administrator on 2018/5/27.
     * 创建了订阅频道名为 redisChat
     */
    app.get('/pub_sub/subscribe', function(req,res){
        redis.subscribe('redisClent',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('redisClent：'+result)
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * 创建了订阅频道名为 redisChat
     */
    app.get('/pub_sub/publish1', function(req,res){
        redis.publish('redisClent','publish1',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('publish：'+result)
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * 创建了订阅频道名为 redisChat
     */
    app.get('/pub_sub/publish2', function(req,res){
        redis.publish('redisClent','publish2',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('publish：'+result)
        })
    });



};

