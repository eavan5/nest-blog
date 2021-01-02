/*
 * @Author: your name
 * @Date: 2021-01-02 12:05:04
 * @LastEditTime: 2021-01-02 18:17:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.controller.ts
 */
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { log } from 'util';
import { ArticleService } from './article.service'


@Controller('article')
export class ArticleController {
  constructor(private ArticleService: ArticleService) { }
  @Get()
  async list() {
    const result = await this.ArticleService.findAll()
    return result
  }

  @Post()
  async addArticle() {
    const result = await this.ArticleService.addData({ title: '增加的数据', content: '增加的数据' })
    return result
  }

  @Put()
  async updateArticle() {
    const result = await this.ArticleService.updateArticle({ _id: '5ff039a303762e60ab4443ba' }, {
      title: '修改之后的',
      content: '修改的数据'
    })
    console.log(result);

    return result
  }

  @Delete()
  async deleteArticle() {
    const result = await this.ArticleService.deleteArticle({
      _id: '5ff00da99d1cb03cb8796e4a'
    })
    return result
  }

}
