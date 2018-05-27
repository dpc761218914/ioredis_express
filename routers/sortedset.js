
/**
 * 功能：set以及Redis综合性测试
 * 作者： dpc
 * 日期： 2018/5/9.
 */
var redis = require('../config/redisClient');




module.exports = function(app) {

    /**
     * Created by Administrator on 2018/5/27.
     *  Zadd 命令用于将一个或多个成员元素及其分数值加入到有序集当中。
     * 如果某个成员已经是有序集的成员，那么更新这个成员的分数值，并通过重新插入这个成员元素，来保证该成员在正确的位置上。
     * 分数值可以是整数值或双精度浮点数。
     * 如果有序集合 key 不存在，则创建一个空的有序集并执行 ZADD 操作。
     * 当 key 存在但不是有序集类型时，返回一个错误。
     * ZADD KEY_NAME SCORE1 VALUE1.. SCOREN VALUE
     * 这里添加一个myzset，分数为1，值为zset1，分数为2时，值为zset2
     */
    app.get('/sortedset/zadd', function(req,res){
        redis.zadd('myzset','3','zset3','4','zset4',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('zadd'+result);
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Zcard 命令用于计算集合中元素的数量。
     * ZCARD KEY_NAME
     */
    app.get('/sortedset/zcard', function(req,res){
        redis.zcard('myzset',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('zcard'+result);
        })
    });

    /**
     * Created by Administrator on 2018/5/27.
     * Zcount 命令用于计算有序集合中指定分数区间的成员数量。
     * ZCOUNT key min max
     * 例如这里统计 1到3中的值
     */
    app.get('/sortedset/zcount', function(req,res){
        redis.zcount('myzset','1','3',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('zcard'+result);
        })
    });


    /**
     * Created by Administrator on 2018/5/27.
     * Zrevrank 命令返回有序集中成员的排名。其中有序集成员按分数值递减(从大到小)排序。
     * 排名以 0 为底，也就是说， 分数值最大的成员排名为 0 。
     * 使用 ZRANK 命令可以获得成员按分数值递增(从小到大)排列的排名。
     * ZREVRANK key member
     * 例如这里的 zset2的值排行第2
     */
    app.get('/sortedset/zrevrank', function(req,res){
        redis.zrevrank('myzset','zset2',function(err,result){
            if(err){
                console.log("操作失败");
            }else{
                console.log('操作成功：'+result);
            }
            res.send('zrevrank'+result);
        })
    });
};

