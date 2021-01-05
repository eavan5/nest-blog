/*
 * @Author: wumao
 * @Date: 2021-01-04 23:42:00
 * @LastEditTime: 2021-01-05 23:04:05
 * @LastEditors: wumao
 * @Description: 
 * @FilePath: /nest-blog/src/module/article/article.dto.ts
 * @website: https://www.wumao.org
 */
import { IsNotEmpty, MaxLength } from 'class-validator';
export class AddArticleDTO {
  @IsNotEmpty({ message: '标题不能为空' })
  @MaxLength(20, { message: '标题长度不能超过20', })
  readonly title: string;

  @IsNotEmpty({ message: '内容不能为空' })
  readonly content: string;
  // readonly add_time: string;
  // readonly update_time: string;
  readonly desc: string;

  // @IsArray()
  // @ArrayUnique()
  readonly category_id?: string[];

  // @IsArray()
  // @ArrayUnique()
  readonly tag_id?: string[];

  // readonly tag_id: string[];

}

