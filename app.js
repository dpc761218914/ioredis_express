/**
 * 功能：ioredis 集成测试
 * 作者： dpc
 * 日期： 2018/5/27.
 */
var express = require('express');
var app = express();



// key相关路由
require('./routers/key')(app);

//string相关路由
require('./routers/string')(app);
// hash相关路由
require('./routers/hash')(app);
// list相关路由
require('./routers/list')(app);
//set相关路由
require('./routers/set')(app);
//sortedset相关路由
require('./routers/sortedset')(app);
//pub_sub相关路由
require('./routers/pub_sub')(app);
//transaction redis事务处理
require('./routers/transaction')(app);





var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});