
/**
 * 功能：key以及Redis综合性测试
 * 作者： dpc
 * 日期： 2018/5/9.
 */
var redis = require('../config/redisClient');




module.exports = function(app) {
    /**
     * Created by Administrator on 2018/5/27.
     * Hmset 命令用于同时将多个 field-value (字段-值)对设置到哈希表中。
     * 此命令会覆盖哈希表中已存在的字段。
     * 如果哈希表不存在，会创建一个空哈希表，并执行HMSET操作
     * HMSET KEY_NAME FIELD1 VALUE1 ...FIELDN VALUEN
     */
    app.get('/hash/hmset', function(req,res){
        //单个的key value也可以这样才存： client.hmset('filed002', 'key001', 'wherethersisadoor', function (err, res) {}
        var qe = {a: 2, b:3, c:4};
        redis.hmset('myhashset',qe,function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test hmset!');
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Hlen 命令用于获取哈希表中字段的数量。
     * HLEN KEY_NAME
     * 返回hash数组的长度
     */
    app.get('/hash/hlen', function(req,res){
        redis.hlen('myhashset',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test hlen!');
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Hkeys 命令用于获取哈希表中的所有域（field）
     * HKEYS key
     */
    app.get('/hash/hkeys', function(req,res){
        redis.hkeys('myhashset',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test hkeys!');
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Hmget 命令用于返回哈希表中，一个或多个给定字段的值。
     * 如果指定的字段不存在于哈希表，那么返回一个 nil 值。
     * HMGET KEY_NAME FIELD1...FIELDN
     * 这里测试获取myhashset中a的值
     */
    app.get('/hash/hmget', function(req,res){
        redis.hmget('myhashset','a',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test hmget!');
        })
    });



    /**
     * Created by Administrator on 2018/5/27.
     * Hset 命令用于为哈希表中的字段赋值 。
     * 如果哈希表不存在，一个新的哈希表被创建并进行 HSET 操作。
     * HSET KEY_NAME FIELD VALUE
     * 这里测试s设置myhashset中a的值
     * 如果字段是哈希表中的一个新建字段，并且值设置成功，返回 1 。 如果哈希表中域字段已经存在且旧值已被新值覆盖，返回 0
     */
    app.get('/hash/hset', function(req,res){
        redis.hset('myhashset','a','222',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test hset!');
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Hvals 命令返回哈希表所有域(field)的值。
     * HVALS KEY_NAME FIELD VALUE
     * 这里是获取所有hvals中所有值
     */
    app.get('/hash/hvals', function(req,res){
        redis.hvals('myhashset',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test hvals!');
        })
    });

};

