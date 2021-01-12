/*
 * @Author: wumao
 * @Date: 2021-01-04 17:25:57
 * @LastEditTime: 2021-01-13 00:44:20
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/schema/meta.schema.ts
 * @website: https://www.wumao.org
 */

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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

  @Prop({ type: Array })
  parent?: { _id?: string, name?: string, alias?: string, desc?: string, type?: number }

  @Prop({ type: Array })
  children?: [{ _id: string, name: string, alias: string, desc: string }];

  @Prop(Array)
  articleList?: string[]
}

export const MetaSchema = SchemaFactory.createForClass(Meta);
