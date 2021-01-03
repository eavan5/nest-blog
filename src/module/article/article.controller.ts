/*
 * @Author: your name
 * @Date: 2021-01-02 12:05:04
 * @LastEditTime: 2021-01-03 22:10:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.controller.ts
 */
import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service'
import { AuthGuard } from '@nestjs/passport';
import { Pagination } from '../../interface/pagination.interface'
import { Article } from 'src/interface/article.interface';


@Controller('article')
export class ArticleController {
  constructor(private ArticleService: ArticleService) { }

  //文章列表以及分页
  @Get()
  async list(@Query() queryInfo: Pagination) {
    const { pageCurrent = 1, pageSize = 10 } = queryInfo
    const articleList = await this.ArticleService.findAll(queryInfo)
    const total = await this.ArticleService.findCount()
    return {
      items: articleList,
      pageInfo: { total, pageCurrent: +pageCurrent, pageSize: +pageSize }
    }
  }

  //读文章
  @Get(':_id')
  readArticle(@Param() param: Article) {
    return this.ArticleService.findOne(param._id)
    }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  addArticle(@Body() body: Article) {
    return this.ArticleService.addData(body)
  }

  //修改
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async updateArticle(
    @Param() param: any,
    @Body() body: Article
  ) {
    const result = await this.ArticleService.updateArticle({ _id: param.id }, body)
    return result
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  deleteArticle(@Param() Param: any) {
    return this.ArticleService.deleteArticle(Param.id)
  }

}
