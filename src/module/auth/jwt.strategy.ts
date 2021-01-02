/*
 * @Author: your name
 * @Date: 2021-01-02 23:05:51
 * @LastEditTime: 2021-01-02 23:36:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/auth/jwt.strategy.ts
 */
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JWT_CONFIG } from '../../app.config';
import { AuthService } from './auth.service.js'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private AuthService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JWT_CONFIG.secret,
    });
  }

  // JWT验证 - Step 4: 被守卫调用
  async validate(name: string, passwd: string) {
    console.log(`JWT验证 - Step 4: 被守卫调用`);
    const user = await this.AuthService.validateUser(name, passwd);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}