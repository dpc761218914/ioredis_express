
/**
 * 功能：list相关操作
 * 作者： dpc
 * 日期： 2018/5/9.
 */
var redis = require('../config/redisClient');



module.exports = function(app) {


    /*
    * lpush  Lpush 命令将一个或多个值插入到列表头部。 如果 key 不存在，一个空列表会被创建并执行 LPUSH 操作。 当 key 存在但不是列表类型时，返回一个错误。
    * */
    app.get('/list/lpush', function (req, res) {
        redis.lpush('mylist','key3','key4',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test lpush!');
        })
    });


    /*
    * Rpop 命令用于移除并返回列表的最后一个元素。
    *
    * */
    app.get('/list/rpop', function (req, res) {
        redis.rpop('mylist',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test  rpop!');
        })
    });

    /*
     * Lpushx 将一个值插入到已存在的列表头部，列表不存在时操作无效。
     *
     * */
    app.get('/list/lpushx', function (req, res) {
        redis.lpushx('mylist','key_head',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test  Lpushx!');
        })
    });

    /*
     *  Linsert 命令用于在列表的元素前或者后插入元素。当指定元素不存在于列表中时，不执行任何操作。
     * 当列表不存在时，被视为空列表，不执行任何操作。
     *  如果 key 不是列表类型，返回一个错误。
     *  LINSERT key BEFORE|AFTER pivot value
     *  将值 value 插入到列表 key 当中，位于值 pivot 之前或之后。
     *
     * */
    app.get('/list/linsert', function (req, res) {
        redis.linsert('mylist','after','key_head','after',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test  linsert!');
        })
    });


    /*
     *  Lindex 命令用于通过索引获取列表中的元素。你也可以使用负数下标，以 -1 表示列表的最后一个元素， -2 表示列表的倒数第二个元素，以此类推。
     *  LINDEX KEY_NAME INDEX_POSITION
     *  根据索引插入值 0第一个值，1表示第二个值
     * */
    app.get('/list/lindex', function (req, res) {
        redis.lindex('mylist','0',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test  lindex!');
        })
    });



};

