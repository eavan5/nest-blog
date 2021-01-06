/*
 * @Author: wumao
 * @Date: 2021-01-06 22:26:26
 * @LastEditTime: 2021-01-06 22:38:28
 * @LastEditors: wumao
 * @Description: 
 * @FilePath: /nest-blog/src/module/article/comment.dto.ts
 * @website: https://www.wumao.org
 */

import { IsEmail, IsNotEmpty, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class AddCommentDTO {
  @IsNotEmpty({ message: '姓名不能为空' })
  @ApiProperty({
    description: '评论人姓名',
    minimum: 1,
    default: '五毛',
  })
  readonly name: string;

  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsEmail()
  @ApiProperty({
    description: '邮箱',
    minimum: 1,
    default: '99360774@qq.com',
  })
  readonly email: string;
  // readonly add_time: string;
  // readonly update_time: string;
  // @ApiProperty()
  @MaxLength(100, { message: '超过100字限制了' })
  @ApiProperty({
    description: '评论内容',
    type: 'string',
    default: '我是评论内容',
  })
  readonly content: string;

}

