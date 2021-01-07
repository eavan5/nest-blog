/*
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-01-08 01:12:38
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleModule } from './module/article/article.module';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';
import { UserController } from './module/user/user.controller';
import { MetaModule } from './module/meta/meta.module';
import { PublishModule } from './module/publish/publish.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`./src/config/${process.env.NODE_ENV}.env`], isGlobal: true },),
    MongooseModule.forRoot(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      user: `${process.env.DATABASE_USER}`,
      pass: `${process.env.DATABASE_PASSWD}`,
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
