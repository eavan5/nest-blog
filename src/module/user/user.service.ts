/*
 * @Author: your name
 * @Date: 2021-01-02 15:03:15
 * @LastEditTime: 2021-01-03 01:45:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/user/user.service.ts
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../../interface/user.interface';
import { makeSalt, encryptPassword } from '../../utils/cryptogram';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModule) {}

  /**
   * @description: 查找是否有这个人
   * @param {*}
   * @return {*}
   */
  findOne(name: string): Promise<any | undefined> {
    try {
      return this.userModule.find({ name });
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
    const { name, passwd, email } = requestBody;
    // 不能有相同用户名
    const sameInfo = await this.findOne(name);
    if (sameInfo.length) {
      throw new HttpException(
        {
          message: '用户名重复',
          status: HttpStatus.FORBIDDEN,
        },
        403,
      );
    }
    const salt = makeSalt(); // 制作密码盐
    const hashPasswd = encryptPassword(passwd, salt); // 加密密码
    const data = {
      name,
      passwd: hashPasswd,
      email,
      salt,
      create_time: Date.now().toString(),
    };
    console.log(data);

    try {
      await this.userModule(data).save();
      return { msg: '注册用户成功' };
    } catch (error) {
      throw new HttpException(
        {
          message: '服务器错误',
          status: HttpStatus.FORBIDDEN,
        },
        403,
      );
    }
  }
}
