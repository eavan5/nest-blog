<!--
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-01-04 22:56:37
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/README.md
-->
# 介绍

> 这是一个由nodejs搭建的博客系统,不断完善中,部分数据库设计借鉴php程序typecho,在一步一步完善中...

## TO DO LIST


- [ ] 用户模块
  - [x] 用户注册
  - [x] 用户登录
  - [x] 用户权限认证
  - [x] 用户权限细分
 
- [ ] 认证模块
  - [ ] 用户组权限控制
  - [ ] 用户组新增
  - [ ] 用户组关联到用户

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
  - [ ] 文章自增id(目前用的是自带主键ID)
  - [ ] 文章的type(以后用来区分相册,微博这种)
  - [ ] 文章的标签,分类建成一个集,拿组件id关联到文章集合里面
  - [ ] 上传的数据进行用pipe做校验


- [ ] 评论模块
  > 这个在纠结到底用第三方模块还是使用自己的

- [ ] 文件存储
  > 这个准备接入阿里的oss存储+CDN,域名在备案中...

- [ ] 服务端日志系统

- [ ] 前端展示
  > 目前还没想到到底做什么样子的
  

## 技术栈

**后端：nestjs + typescript + MongoDB**

**前端：vue3 + typescript**

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
5. @Delete /param(_id:string)  [auth]  删除文章

### 用户模块

 

> /user/

1. POST body({name:string,passwd:string}) 注册用户
2. POST param /login body({name:string,passwd:string}) 用户登录
### META模块

 

> /meta/

> 根据RESTful风格的增删改查

# DATABASE DESCRIPTION
## 集合

### articles：文章集合

1. _id:文章id（默认主键）
2. title：文章标题
3. content：文章内容
4. author_id:作者id
5. desc:文章描述
6. category_id:文章分类id
7. tag_id：标签id
8. create_time:发布时间
9. update_time:更新时间
10. views:查看次数
11. hidden:是否隐藏(0是显示,默认是1隐藏)

### commons：评论

1. _id:评论id（默认主键）
2. name：姓名
3. email：邮箱
4. content：内容
5. create_time:评论时间
6. connect_id:关联的文章id（外键）

### users:用户

1. _id:用户id（默认主键）
2. name:用户名
3. passwd：密码
4. create_time:创建时间
5. email：邮箱（头像使用gravatar服务）
6. salt:盐，加密验证用的随机字符串

### classes：分类以及标签

1. _id:分类id（默认主键）
2. type: 类型（ tag，category 标签或者是分类）
3. title：标题
4. desc：描述

### relationships：关联表

1. _id:ID（默认主键）
2. article_id:文章id
3. class_id:分类id

