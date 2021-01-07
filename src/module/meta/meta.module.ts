/*
 * @Author: wumao
 * @Date: 2021-01-04 16:49:47
 * @LastEditTime: 2021-01-04 22:02:39
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/meta/meta.module.ts
 * @website: https://www.wumao.org
 */
import { Module } from '@nestjs/common';
import { MetaController } from './meta.controller';
import { MetaService } from './meta.service';
import { MetaSchema } from '../../schema/meta.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Meta',
        schema: MetaSchema,
        collection: 'metas',
      },
    ]),
  ],
  controllers: [MetaController],
  providers: [MetaService],
})
export class MetaModule {}
