/*
 * @Author: wumao
 * @Date: 2021-01-02 12:04:38
 * @LastEditTime: 2021-02-07 18:00:01
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/article/article.module.ts
 * @website: https://www.wumao.org
 */
import { Module } from '@nestjs/common';
import { ArticleController } from './article.controller';

//配置数据库模型
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from '../../schema/article.schema';
import { MetaSchema } from '../../schema/meta.schema';
import { ArticleService } from './article.service';
// import moment from 'moment';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Article',
        schema: ArticleSchema,
        collection: 'articles',
      },
    ]),
    MongooseModule.forFeature([
      {
        name: 'Meta',
        schema: MetaSchema,
        collection: 'metas',
      },
    ]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule { }
