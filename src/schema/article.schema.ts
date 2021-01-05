/*
 * @Author: wumao
 * @Date: 2021-01-02 11:43:11
 * @LastEditTime: 2021-01-05 21:27:00
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/schema/article.schema.ts
 */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Meta } from './meta.schema'


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

  @Prop(Number)
  hidden: number;

  // @Prop(Array)
  // category_id: array;

  @Prop([{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meta'
  }])
  category_id: Meta[];

  @Prop([{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meta'
  }])
  tag_id: Meta[];

  // 文章分类
  // @IsArray()
  // @ArrayNotEmpty({ message: '文章分类？' })
  // @ArrayUnique()
  // @prop({ ref: () => Category, required: true, index: true })
  // category: Ref<Category>[];




}

export const ArticleSchema = SchemaFactory.createForClass(Article);
