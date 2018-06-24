# ioredis_express
use ioredis in Express successful

ioredis在redis中操作指南，redis客户端使用RedisDesktopManager，redis在express中的用法参考菜鸟教程实现。

### 一、前言 项目引入配置

##### 1.1 在config文件夹中新建redisClient文件

```
var Redis = require('ioredis');
var redis = new Redis();
module.exports = redis;
```
##### 1.2 在需要引入的文件中引入

```
var redis = require('../config/redisClient');
```



### 二、key操作
##### 2.1 设置缓存操作

```
var sum=1;     
//设置缓存,   
redis.set('sum', sum);     
//将key设置给expire，ex是设置过期标识，过期时间设置为60秒。     
redis.set('expire','key','ex',60);  
```

##### 2.2 获取缓存操作

```
//获取expire的缓存
var expire=redis.get('expire');
```
##### 2.3 判断缓存是否存在  

```
 //判断key为sum的缓存是否存在   
 //存在返回1，不存在返回0
 redis.exists('sum',function(err,result){
        if(err){
            console.log("读取sum redis数据失败");
        }else{
            console.log('操作状态：'+result);
        }
        res.send('操作状态：'+result)
   })
```  
##### 2.4 删除缓存操作
```
 //删除sum的缓存
 redis.del('sum',function(err,result){
           if(err){
               console.log("读取sum redis数据失败");
           }else{
               console.log('key操作中del的返回结果为：'+result);
           }
           res.send('key操作中del的返回结果为：'+result)  
      })
```    
##### 2.5 获取系统中全不缓存或者关键字匹配缓存

```
   //这里是一个匹配的过程，*标识匹配所有，这里可以实现对用户的缓存。
   //例如缓存用户是user_userid,其中user_是不变的，便于匹配userid是可变的，
   //获取所有缓存
   redis.keys('*',function(err,result){
                  if(err){
                      console.log("err");
                  }else{
                      console.log('redis中所有的key为：'+result);
                  }
              }); 
    //例如获取所有用户，redis缓存中有user_111,user_222
    redis.keys('user_*',function(err,result){
                if(err){
                    console.log("err");
                }else{
                    console.log('redis中所有的key为：'+result);
                }
            });
```  
 
 
### 三、String操作
##### 3.1 同时获取多个key的值
```
   //命令返回所有(一个或多个)给定 key 的值。 如果给定的 key 里面，有某个 key 不存在，那么这个 key 返回特殊值 nil
   //例如这里获取key名为sum和foo的值，放在result中
       redis.mget('sum','foo',function(err,result){
                  if(err){
                      console.log("操作失败");
                  }else{
                      console.log('操作成功：'+result);
                  }
                  res.send('mget：'+result);
              })
``` 
##### 3.2 同时设置多个key value的值
```
   //批量将key1和key2分别设置value1和value2
   redis.mset('key1','value1','key2','value2',function(err,result){
               if(err){
                   console.log("操作失败");
               }else{
                   console.log('操作成功：'+result);
               }
               res.send('mset：'+result);
           })
``` 
##### 3.3 同时设置多个key value的值
```
   //批量将key1和key2分别设置value1和value2
   redis.mset('key1','value1','key2','value2',function(err,result){
               if(err){
                   console.log("操作失败");
               }else{
                   console.log('操作成功：'+result);
               }
               res.send('mset：'+result);
           })
``` 
### 四、Hash操作
##### 4.1 同时获取多个key的值
```
//将键值对qe设置给myhashset中
var qe = {a: 2, b:3, c:4};
redis.hmset('myhashset',qe,function(err,result){
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
    res.send('test hmset!');
})    
``` 
 
##### 4.2 获取hash值中特定的值
```
//获取myhashset中关键字为a的值
 redis.hmget('myhashset','a',function(err,result){
             if(err){
                 console.log(err);
             }else{
                 console.log(result);
             }
             res.send('test hmget!');
 })  
``` 
 
##### 4.3 更新hash中某个键值对
```
//更新myhashset中键为a的值
 redis.hset('myhashset','a','222',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test hset!');
        }) 
```
 
##### 4.4 更新hash中某个键值对
```
//更新myhashset中键为a的值
redis.hset('myhashset','a','222',function(err,result){
         if(err){
             console.log(err);
         }else{
             console.log(result);
         }
         res.send('test hset!');
     }) 
``` 

### 五、List操作
##### 5.1 像list中插入多个值
```
//像list中批量插入数据，key3和key4
redis.lpush('mylist','key3','key4',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test lpush!');
        })
``` 
##### 5.2 根据坐标从list中取值
```
//根据位置向list中插入值
 redis.lindex('mylist','0',function(err,result){
            if(err){
                console.log(err);
            }else{
                console.log(result);
            }
            res.send('test  lindex!');
        })
``` 
### 六、其他操作
##### 以上操作熟悉后，其他操作请参考菜鸟教程或者此项目代码示例
 

