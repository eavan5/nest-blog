/*
 * @Author: wumao
 * @Date: 2021-01-04 23:42:00
 * @LastEditTime: 2021-02-02 22:45:29
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/article/article.dto.ts
 * @website: https://www.wumao.org
 */
import { IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AddArticleDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  @MaxLength(20, { message: '标题长度不能超过20' })
  @ApiProperty({
    description: '标题',
    minimum: 1,
    default: '测试标题',
  })
  readonly title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  @ApiProperty({
    description: '内容',
    minimum: 1,
    default: '测试内容',
  })
  readonly content: string;
  // readonly add_time: string;
  // readonly update_time: string;
  // @ApiProperty()
  @ApiProperty({
    description: '描述内容',
    minimum: 0,
    default: '我是描述',
  })
  readonly desc: string;

  // @IsArray()
  // @ArrayUnique()
  @ApiProperty({ type: [String] })
  readonly category_id?: string[];

  // @IsArray()
  // @ArrayUnique()
  @ApiProperty({ type: [String] })
  readonly tag_id?: string[];

  // readonly tag_id: string[];
}
