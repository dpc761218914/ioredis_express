
/**
 * 功能：String相关API测试
 * 作者： dpc
 * 日期： 2018/5/9.
 */
var redis = require('../config/redisClient');

module.exports = function(app) {


    /**
     * Created by Administrator on 2018/5/27.
     * 获取key为String的子串操作，
     * 这里截取0,5字符串
     * GETRANGE KEY_NAME start end
     */
    app.get('/string/getrange', function(req,res){
        redis.getrange('sum',0,5,function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('getrange：'+result)
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Getset 命令用于设置指定 key 的值，并返回 key 的旧值。
     * GETSET KEY_NAME VALUE
     */
    app.get('/string/getset', function(req,res){
        redis.getset('getset','newvalue',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('getset：'+result)
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Mget 命令返回所有(一个或多个)给定 key 的值。 如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil
     * MGET KEY1 KEY2 .. KEYN
     */
    app.get('/string/mget', function(req,res){
        redis.mget('sum','foo',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('mget：'+result);
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Setex 命令为指定的 key 设置值及其过期时间。如果 key 已经存在， SETEX 命令将会替换旧的值。
     * 设置键名、过期时间、值
     * SETEX KEY_NAME TIMEOUT VALUE
     */
    app.get('/string/setex', function(req,res){
        redis.setex('expire',50,'expire_value',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('setex：'+result);
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Strlen 命令用于获取指定 key 所储存的字符串值的长度。当 key 储存的不是字符串值时，返回一个错误。
     * STRLEN KEY_NAME
     */
    app.get('/string/strlen', function(req,res){
        redis.strlen('sum',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('strlen：'+result);
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Mset 命令用于同时设置一个或多个 key-value 对。
     * MSET key1 value1 key2 value2 .. keyN valueN
     * 这里测试key1 value1 key2 value2
     */
    app.get('/string/mset', function(req,res){
        redis.mset('key1','value1','key2','value2',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('mset：'+result);
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Incr 命令将 key 中储存的数字值增一。
     * 如果 key 不存在，那么 key 的值会先被初始化为 0 ，然后再执行 INCR 操作。
     * 如果值包含错误的类型，或字符串类型的值不能表示为数字，那么返回一个错误。
     * INCR KEY_NAME
     */
    app.get('/string/incr', function(req,res){
        redis.incr('incr',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('incr：'+result);
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Append 命令用于为指定的 key 追加值。
     * 如果 key 已经存在并且是一个字符串， APPEND 命令将 value 追加到 key 原来的值的末尾。
     * 如果 key 不存在， APPEND 就简单地将给定 key 设为 value ，就像执行 SET key value 一样
     *  APPEND KEY_NAME NEW_VALUE
     *  返回值是返回vlaue的长度
     */
    app.get('/string/append', function(req,res){
        redis.append('append','append',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('append：'+result);
    })
    });
};

