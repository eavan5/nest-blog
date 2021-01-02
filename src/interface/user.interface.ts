/*
 * @Author: your name
 * @Date: 2021-01-02 19:17:35
 * @LastEditTime: 2021-01-02 22:37:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/interface/user.interface.ts
 */
export interface User {
  name: string;
  passwd: string;
  _id?: string;
  email?: string;
  create_time?: string;
}