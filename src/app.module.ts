/*
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-02-04 14:53:41
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
import configuration from './config/configuration';


@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: `./src/config/${process.env.NODE_ENV}.env`, load: [configuration], isGlobal: true, ignoreEnvFile: false, },),
    MongooseModule.forRoot(
      process.env.DATABASE_URL, {
      useNewUrlParser: true,
      user: `${process.env.DATABASE_USER}`,
      pass: `${process.env.DATABASE_PASSWD}`,
    }),
    // MongooseModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: async (configService: ConfigService) => {
    //     // console.log(configService.get<string>('DATABASE_URL'));
    //     console.log(process.env.DATABASE_URL);
    //     setTimeout(() => {
    //       console.log(configuration());
    //     }, 3000)

    //     return {
    //       uri: configService.get<string>('DATABASE_URL'),
    //     }
    //   },
    //   inject: [ConfigService],
    // }),
    ArticleModule,
    UserModule,
    AuthModule,
    MetaModule,
    PublishModule,
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})


export class AppModule { }
