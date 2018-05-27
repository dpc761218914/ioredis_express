
/**
 * 功能：set以及Redis综合性测试
 * 作者： dpc
 * 日期： 2018/5/9.
 */
var redis = require('../config/redisClient');



module.exports = function(app) {

    /**
     * Created by Administrator on 2018/5/27.
     * Sadd 命令将一个或多个成员元素加入到集合中，已经存在于集合的成员元素将被忽略。
     * 假如集合 key 不存在，则创建一个只包含添加的元素作成员的集合。
     * 当集合 key 不是集合类型时，返回一个错误。
     * SADD KEY_NAME VALUE1..VALUEN
     * 返回操作操作成功的数量
     *
     */
    app.get('/set/sadd', function(req,res){
        redis.sadd('myset','set3','set4',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('sadd'+result);
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Scard 命令返回集合中元素的数量。
     * SADD KEY_NAME VALUE1..VALUEN
     * 返回操作操作成功的数量
     *
     */
    app.get('/set/scard', function(req,res){
        redis.scard('myset',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('scard'+result);
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Sismember 命令判断成员元素是否是集合的成员。
     * SISMEMBER KEY VALUE
     */
    app.get('/set/sismember', function(req,res){
        redis.sismember('myset','set1',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('sismember'+result);
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Srem 命令用于移除集合中的一个或多个成员元素，不存在的成员元素会被忽略。当 key 不是集合类型，返回一个错误。
     * SREM KEY MEMBER1..MEMBERN
     */
    app.get('/set/srem', function(req,res){
        redis.srem('myset','set1',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('srem'+result);
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Srem 命令用于移除集合中的一个或多个成员元素，不存在的成员元素会被忽略。当 key 不是集合类型，返回一个错误。
     * SREM KEY MEMBER1..MEMBERN
     */
    app.get('/set/srem', function(req,res){
        redis.srem('myset','set1',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('srem'+result);
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Sscan 命令用于迭代集合中键的元素。
     * SSCAN key cursor [MATCH pattern] [COUNT count]
     */
    app.get('/set/sscan', function(req,res){
        redis.sscan('myset','0','match','set*',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('sscan'+result);
        })
    });










};

