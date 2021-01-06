/*
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-01-04 21:35:40
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_DB } from './app.config';
import { ArticleModule } from './module/article/article.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { UserController } from './module/user/user.controller'
import { MetaModule } from './module/meta/meta.module';
import { PublishModule } from './module/publish/publish.module';

@Module({  
  imports: [
    MongooseModule.forRoot(MONGO_DB.url, {
      useNewUrlParser: true,
    }),
    ArticleModule,
    UserModule,
    AuthModule,
    MetaModule,
    PublishModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
