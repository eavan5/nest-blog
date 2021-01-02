/*
 * @Author: your name
 * @Date: 2021-01-02 15:02:43
 * @LastEditTime: 2021-01-03 01:21:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/user/user.module.ts
 */
import { Module } from '@nestjs/common';
// import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserSchema } from '../../schema/users.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'User',
      schema: UserSchema,
      collection: 'users',
    }
  ])],
  // controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
