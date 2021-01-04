/*
 * @Author: wumao
 * @Date: 2021-01-05 00:44:11
 * @LastEditTime: 2021-01-05 01:00:12
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/meta/meta.dto.ts
 * @website: https://www.wumao.org
 */
import { IsNotEmpty, IsNumber } from 'class-validator';

export class AddMetaDTO {
  @IsNotEmpty({ message: '名儿不能为空' })
  readonly name: string

  @IsNotEmpty({ message: '别名不能为空' })
  readonly alias: string

  @IsNumber({}, { message: '请输入1或者2,1是标签,2是分类' })
  readonly type: number
}