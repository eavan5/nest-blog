/*
 * @Author: your name
 * @Date: 2021-01-02 23:04:08
 * @LastEditTime: 2021-01-03 03:32:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/auth/auth.service.ts
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { encryptPassword } from '../../utils/cryptogram';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) { }

  明文
  //校验密码是否相等
  validatePasswd(encryptionPassword: string, plainTextPassword: string, salt: string) {
    return encryptionPassword === encryptPassword(plainTextPassword, salt)
  }

  //校验用户
  async validateUser(name: string, passwd: string, JwtStrategy?: boolean): Promise<any> {
    console.log('JWT验证 - Step 2: 校验用户信息');
    const user = await this.usersService.findOne(name);
    if (user.length === 1) {
      const hashedPassword = user[0].passwd;
      const salt = user[0].salt;
      // 通过密码盐，加密传参，再与数据库里的比较，判断是否相等
      const hashPassword = encryptPassword(passwd, salt);
      if (hashedPassword === hashPassword) {
        // 密码正确
        if (JwtStrategy) {
          return user[0]
        }
        return this.certificate({ name, passwd });
      } else {
        // 密码错误
        throw new HttpException({
          message: '小伙子,密码有问题啊',
          status: HttpStatus.FORBIDDEN
        }, 403)
      }
    }
    // 查无此人
    throw new HttpException({
      message: '小伙子,名字写错了吧?',
      status: HttpStatus.FORBIDDEN
    }, 403)
  }

  // JWT验证 - 颁发证书
  certificate(params: any) {
    const payload = {
      name: params.name,
      passwd: params.passwd,
    };
    console.log('JWT验证 - Step 3: 处理 jwt 签证');
    try {
      const token = this.jwtService.sign(payload);
      return {
        token,
        msg: `恭喜您,登录成功`,
      };
    } catch (error) {
      throw new HttpException({
        message: '服务器错误',
        status: HttpStatus.FORBIDDEN
      }, 403)
    }
  }
}
