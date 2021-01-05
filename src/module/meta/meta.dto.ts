/*
 * @Author: wumao
 * @Date: 2021-01-05 00:44:11
 * @LastEditTime: 2021-01-05 21:43:37
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/meta/meta.dto.ts
 * @website: https://www.wumao.org
 */
import { IsNotEmpty, IsIn } from 'class-validator';

export class AddMetaDTO {
  @IsNotEmpty({ message: '名儿不能为空' })
  readonly name: string

  @IsNotEmpty({ message: '别名不能为空' })
  readonly alias: string

  @IsIn([1, 2])
  readonly type: number
}