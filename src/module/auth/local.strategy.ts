/*
 * @Author: your name
 * @Date: 2021-01-02 23:54:58
 * @LastEditTime: 2021-01-03 00:22:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/auth/local.strategy.ts
 */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(name: string, passwd: string): Promise<any> {
    const user = await this.authService.validateUser(name, passwd);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
