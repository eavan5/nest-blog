/*
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-01-02 11:40:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB } from './app.config';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_DB.url, {
      useNewUrlParser: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
