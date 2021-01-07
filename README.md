# 介绍

> 这是一个由nodejs搭建的博客系统,不断完善中,后端采用nodejs最好的框架nestjs，使用typescript开发，，以及使用MongoDB数据库，认证部分使用JWT认证，上传接入阿里OSS，接入swagger，内容不断完善中。。。


## 上线
v0.0.1已上线
使用docker虚拟化的nodejs+mongodb+pm2,构建于阿里云服务器
```
api地址：http://api.forpad.net
```

## TO DO LIST


- [ ] 用户模块
  - [x] 用户注册
  - [x] 用户登录
  - [x] 用户权限认证
  - [ ] 用户权限细分
 
- [x] 公共模块
    - [x] 接入oss文件上传
    - [ ] 网站信息配置

- [ ] 认证模块
  - [ ] 用户组区分
  - [ ] 用户组权限管理

- [X] META模块(标签/分类)
  - [x] meta查看(根据type)
  - [x] META及分页查询
  - [x] META删除
  - [x] META修改

- [ ] 文章模块
  - [x] 文章查看
  - [x] 文章列表查询分页
  - [x] 文章新增
  - [x] 文章删除
  - [x] 文章修改
  - [x] 上传的数据进行用pipe做校验
  - [ ] 相册
  - [ ] 热门文章
  - [ ] 随机文章
  - [ ] 文章自增id(目前用的是自带主键ID)
  - [ ] 文章的type(以后用来区分相册,微博这种)
  - [ ] 文章的标签,分类建成一个集,拿组件id关联到文章集合里面


- [x] 评论模块
    - [x] 评论新增
    - [ ] 最新评论
    - [ ] 评论删除
    - [ ] 所有评论查询

- [x] 文件存储
  > 已经接入阿里云oss上传

- [ ] 服务端日志系统

- [ ] 前端展示
  > 目前还没想到到底做什么样子的
  
  # API DOCUMENT

> 接口采用RESTful API设计规范

## 文档说明 

> 有auth的接口表示需要token认证,token默认有效期为30天

## 文章模块

> /article/

1. @GET query({pageSize=10,pageCurrent=1}  ) 拉取文章列表
2. @GET /param(_id:string) param 读取文章详情  
3. @PUT /param(_id:string)   + body(article:Article) [auth] 修改文章详情
4. @POST body(article:Article) [auth]  创建文章
5. @DELETE /param(_id:string)  [auth]  删除文章

### 用户模块

 

> /user/

1. POST body({name:string,passwd:string}) 注册用户
2. POST param /login body({name:string,passwd:string}) 用户登录


### META模块

> /meta/

> 根据RESTful风格的增删改查

### 评论模块
> @post /article/:id/comment
 
### 公共模块
##### 图片上传
> @post /publish/upload

# 起步
 ```
 $ npm install
 ```

## development
```
$ npm run start
```

## watch mode
```
$ npm run start:dev
```

## production mode
```
$ npm run start:prod
```
# Test
## unit tests
```
$ npm run test
```

## e2e tests
```
$ npm run test:e2e
```

## test coverage
```
$ npm run test:cov
```
