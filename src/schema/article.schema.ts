/*
 * @Author: wumao
 * @Date: 2021-01-02 11:43:11
 * @LastEditTime: 2021-01-03 20:25:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/schema/article.schema.ts
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';


@Schema()
export class Article {
  @Prop(String)
  title: string;

  @Prop(String)
  content: string;

  @Prop(String)
  author_id: string;

  @Prop(String)
  desc: string

  @Prop(Number)
  add_time: number;

  @Prop(Number)
  views: number;

  @Prop(String)
  update_time: number;

  @Prop(String)
  category_id: string;

  @Prop(Number)
  hidden: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
