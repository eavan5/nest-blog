/*
 * @Author: wumao
 * @Date: 2021-01-02 12:04:38
 * @LastEditTime: 2021-01-04 21:06:30
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/article/article.module.ts
 * @website: https://www.wumao.org
 */
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';

//配置数据库模型
import { MongooseModule } from '@nestjs/mongoose'
import { ArticleSchema } from '../../schema/article.schema'
import { ArticleService } from './article.service';
@Module({
  imports: [MongooseModule.forFeature([
    {
      name: 'Article',
      schema: ArticleSchema,
      collection: 'articles',
    }
  ])],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule { }
