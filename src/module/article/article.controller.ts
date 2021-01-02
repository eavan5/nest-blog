/*
 * @Author: your name
 * @Date: 2021-01-02 12:05:04
 * @LastEditTime: 2021-01-02 13:04:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { ArticleService } from './article.service'

@Controller('article')
export class ArticleController {
  constructor(private ArticleService: ArticleService) { }
  @Get()
  async list() {
    const result = await this.ArticleService.findAll()
    return result
  }
}
