/*
 * @Author: wumao
 * @Date: 2021-01-04 23:42:00
 * @LastEditTime: 2021-01-05 00:23:14
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/user/user.dto.ts
 * @website: https://www.wumao.org
 */
import { MaxLength, MinLength, IsEmail } from 'class-validator';
export class userDTO {
  @MinLength(5, { message: '用户名不能小于过5位' })
  @MaxLength(20, { message: '用户名不能超过10位' })
  readonly name: string;

  @MinLength(5, { message: '密码不能小于过5位' })
  @MaxLength(10, { message: '密码不能超过10位' })
  readonly passwd: string;
  // readonly add_time: string;
  // readonly update_time: string;
  @IsEmail()
  email: string;
}
