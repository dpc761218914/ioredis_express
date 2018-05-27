
/**
 * 功能：key以及Redis综合性测试
 * 作者： dpc
 * 日期： 2018/5/9.
 */

    /*
    * 之前的写法，每个页面都需要new一个对象，先只需要引入即可
    * var Redis = require('ioredis');
    *var redis = new Redis();
    * */

var redis = require('../config/redisClient');





module.exports = function(app) {
    /**
     * Created by Administrator on 2018/5/27.
     * 测试缓存和非缓存效果
     * 首次进入缓存中没有数据，进行一个耗时（100万数据相加）的运算，然后将数据存进去。
     * 第二次进入接口的时候，判断缓存中是否有数据，如果有数据，从缓存中取数据，否则继续耗时操作。
     */
    app.get('/key/test_redis', function(req,res){
        var start_time=new Date().getTime();
        console.log("开始时间:"+start_time);
        redis.get('sum', function (err, result) {
            var sum=0;
            if(result==null){
                for(var i=0;i<1000000;i++){
                    sum=sum+i;
                }
                redis.set('sum', sum);
                var no_redis_end_time=new Date().getTime();
                console.log("没有缓存时候运行结束时间:"+no_redis_end_time);
                var shijiancha=no_redis_end_time-start_time;
                console.log("没有缓存的时候时间差:"+shijiancha);
                res.send('无缓存计算时间差为!'+shijiancha);
            }else{
                var yes_redis_end_time=new Date().getTime();
                console.log("有缓存时候运行结束时间:"+yes_redis_end_time);
                var shijiancha=yes_redis_end_time-start_time;
                console.log("有缓存的时候时间差:"+(yes_redis_end_time-start_time));
                res.send('有缓存的计算时间差：'+shijiancha);
            }
        });

    });


    /**
     * Created by Administrator on 2018/5/27.
     * 删除key操作
     * 删除成功返回1，删除失败返回0
     */
    app.get('/key/del', function(req,res){
        redis.del('sum',function(err,result){
            if(err){
                console.log("读取sum redis数据失败");
            }else{
                console.log('key操作中del的返回结果为：'+result);
            }
            res.send('key操作中del的返回结果为：'+result)
        })


    });

    /**
     * Created by Administrator on 2018/5/27.
     * 判断可以是否存在的操作
     * 删除成功返回1，删除失败返回0
     */
    app.get('/key/exists', function(req,res){
        redis.exists('sum',function(err,result){
            if(err){
                console.log("读取sum redis数据失败");
            }else{
                console.log('操作状态：'+result);
            }
            res.send('操作状态：'+result)
        })


    });

    /**
     * Created by Administrator on 2018/5/27.
     * redis过期时间设置
     * 删除成功返回1，删除失败返回0
     */
    app.get('/key/set_expire', function(req,res){
        redis.set('expire','key','ex',60);
        res.send('set_success');
    });

    /**
     * Created by Administrator on 2018/5/27.
     * 查找expire，查看其过期时间
     * 删除成功返回1，删除失败返回0
     */
    app.get('/key/get_expire', function(req,res){
        var expire=redis.get('expire');
        redis.ttl('expire',function(err,result){
            if(err){
                console.log("err");
            }else{
                console.log('expire过期时间倒计时：'+result);
            }
        });
        res.send('set_success');
    });

    /**
     * Created by Administrator on 2018/5/27.
     * 查询redis中所有key
     * 查询缓存中所有的key
     */
    app.get('/key/get_all_key', function(req,res){
        redis.keys('*',function(err,result){
            if(err){
                console.log("err");
            }else{
                console.log('redis中所有的key为：'+result);
            }
        });
        res.send('set_success');
    });


};

