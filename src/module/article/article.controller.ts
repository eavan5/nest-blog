/*
 * @Author: your name
 * @Date: 2021-01-02 12:05:04
 * @LastEditTime: 2021-02-03 15:47:47
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.controller.ts
 */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { AuthGuard } from '@nestjs/passport';
import { ArticleList, Pagination } from '../../interface/pagination.interface';
import { Article } from 'src/interface/article.interface';
import { ValidationPipe } from '../../pipe/validation.pipe';
import { AddArticleDTO } from './article.dto';
import { AddCommentDTO } from './comment.dto';
import { ApiBody, ApiBearerAuth, ApiParam } from '@nestjs/swagger';
import { type } from 'os';

@Controller('article')
export class ArticleController {
  constructor(private ArticleService: ArticleService) { }

  //文章列表以及分页
  @Get()
  async list(@Query() queryInfo: ArticleList) {
    // console.log(queryInfo);

    const { pageCurrent = 1, pageSize = 10 } = queryInfo;
    const articleList = await this.ArticleService.findAll(queryInfo);
    const total = await this.ArticleService.findAll(queryInfo, true);;
    return {
      items: articleList,
      pageInfo: { total, pageCurrent: +pageCurrent, pageSize: +pageSize },
    };
  }

  //获取热门文章
  @Get('/hot/:length')
  hotList(@Param() param: string) {
    return this.ArticleService.getHotArticlesList(+param.length)
  }

  //读文章
  @Get(':_id')
  readArticle(@Param() param: Article) {
    return this.ArticleService.findOne(param._id);
  }

  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  @Post()
  @ApiBearerAuth()
  @ApiBody({ type: [AddArticleDTO] })
  addArticle(@Body() body: AddArticleDTO) {
    return this.ArticleService.addData(body);
  }

  //修改
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  @Put(':id')
  @ApiBearerAuth()
  @ApiBody({ type: [AddArticleDTO] })
  async updateArticle(@Param() param: any, @Body() body: AddArticleDTO) {
    const result = await this.ArticleService.updateArticle(
      { _id: param.id },
      body,
    );
    return result;
  }

  //删除文章
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  @ApiBearerAuth()
  @ApiParam({ name: '文章ID' })
  deleteArticle(@Param() Param: any) {
    return this.ArticleService.deleteArticle(Param.id);
  }

  //评论
  @Post('/:id/comments/')
  @UsePipes(new ValidationPipe())
  @ApiParam({ name: '文章ID', required: true })
  @ApiBody({ type: AddCommentDTO })
  comment(@Param() param: any, @Body() body: AddCommentDTO) {
    return this.ArticleService.addComment(param.id, body);
  }

  //根据标签ID查询查询文章列表带分页
  @Get('/meta/:type/:_id')
  getList(@Param() param: any, @Query() pageInfo: Pagination) {
    const { type, _id } = param
    return this.ArticleService.getMetaArticleList(type, _id, pageInfo)
  }

}
