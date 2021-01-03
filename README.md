<!--
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-01-03 20:23:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/README.md
-->
# 介绍

> 这是一个由nodejs搭建的博客系统,不断完善中...

# 技术栈

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
3. @PUT /param(_id:string)   + body(article:Article) <auth>  修改文章详情
4. @POST body(article:Article) <auth>

### 用户模块

 

> /user/

1. POST body({name:string,passwd:string}  ) 注册用户
2. POST param /login body({name:string,passwd:string}  ) 用户登录

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

