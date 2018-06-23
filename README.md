# ioredis_express
use ioredis in Express successful

ioredis在redis中操作指南

### 一、前言 项目引入配置

#### 1.1 在config文件夹中新建redisClient文件

```
var Redis = require('ioredis');
var redis = new Redis();
module.exports = redis;
```
#### 1.2 在需要引入的文件中引入

```
var redis = require('../config/redisClient');
```



### 二、key操作
