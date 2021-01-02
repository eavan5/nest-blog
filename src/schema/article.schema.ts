/*
 * @Author: wumao
 * @Date: 2021-01-02 11:43:11
 * @LastEditTime: 2021-01-02 11:55:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/schema/article.schema.ts
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatDocument = Article & Document;

@Schema()
export class Article {
  @Prop(String)
  title: string;

  @Prop(String)
  content: string;

  @Prop(String)
  author_id: string;

  @Prop(String)
  add_time: string;

  @Prop(String)
  update_time: string;

  @Prop(String)
  category_id: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
