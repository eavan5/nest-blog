/*
 * @Author: wumao
 * @Date: 2021-01-02 11:17:07
 * @LastEditTime: 2021-01-02 14:01:34
 * @LastEditors: Please set LastEditors
 * @Description: 默认的配置文件
 * @FilePath: /nest-blog/src/app.config.ts
 */
export const CONFIG_G = {
  PORT: 3000,
};
export const MONGO_DB = {
  uri: `mongodb://127.0.0.1:27017/nestBlog`,
  username: 'admin',
  password: '123456',
  url: 'mongodb://admin:123456@localhost:27017/nestBlog?authSource=admin',
};
