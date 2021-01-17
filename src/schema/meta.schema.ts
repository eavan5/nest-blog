/*
 * @Author: wumao
 * @Date: 2021-01-04 17:25:57
 * @LastEditTime: 2021-01-17 14:41:43
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/schema/meta.schema.ts
 * @website: https://www.wumao.org
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Article } from './article.schema'

@Schema()
export class Meta {
  // @Prop()
  // sort: number

  //1是tag，2是category
  @Prop(Number)
  type: number;

  @Prop(String)
  name: string;

  @Prop(String)
  alias?: string;

  @Prop(String)
  desc: string;

  @Prop(Number)
  order: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Article',
  })
  article_list?: Article[]
}

export const MetaSchema = SchemaFactory.createForClass(Meta);
