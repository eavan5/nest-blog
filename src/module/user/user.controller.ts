/*
 * @Author: your name
 * @Date: 2021-01-02 15:03:02
 * @LastEditTime: 2021-01-06 02:24:13
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/user/user.controller.ts
 */

import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from '../auth/auth.service';
import { ValidationPipe } from '../../pipe/validation.pipe';
import { userDTO } from './user.dto';
@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post()
  register(@Body() body: userDTO) {
    return this.userService.registerUser(body);
  }

  @Post('/login')
  async login(@Body() loginInfo: any) {
    console.log('JWT验证 - Step 1: 用户请求登录');
    return await this.authService.validateUser(
      loginInfo.name,
      loginInfo.passwd,
    );
  }
}
