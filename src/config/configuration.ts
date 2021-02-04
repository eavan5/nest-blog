/*
 * @Author: wumao
 * @Date: 2021-02-04 01:02:49
 * @LastEditTime: 2021-02-04 01:04:09
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/config/configuration.ts
 * @website: https://www.wumao.org
 */
export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    url: process.env.DATABASE_URL,
    user: process.env.DATABASE_USER,
    passwd: process.env.DATABASE_PASSWD,
  }
});