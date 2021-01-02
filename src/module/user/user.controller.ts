/*
 * @Author: your name
 * @Date: 2021-01-02 15:03:02
 * @LastEditTime: 2021-01-02 22:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/user/user.controller.ts
 */

import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service'
@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Post()
  register(@Body() body: any) {
    return this.userService.registerUser(body)

  }
}
