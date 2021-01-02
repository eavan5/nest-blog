/*
 * @Author: your name
 * @Date: 2021-01-02 15:03:15
 * @LastEditTime: 2021-01-02 19:38:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/user/user.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interface/user.interface'

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModule) { }

  /**
  * @description: 查找是否有这个人
  * @param {*}
  * @return {*}
  */
  findOne(name: string): Promise<any | undefined> {
    try {
      return this.userModule.find({ name })
    } catch (error) {
      return void 0;
    }
  }

  /**
   * @description: 注册用户
   * @param {*}
   * @return {*}
   */
  async registerUser(requestBody: User): Promise<any | undefined> {
    const { name, passwd, email } = requestBody
    const hasSame = await this.findOne(name)
    // if()
  }

}


