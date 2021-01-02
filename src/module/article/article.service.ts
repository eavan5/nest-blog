/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: your name
 * @Date: 2021-01-02 12:52:05
 * @LastEditTime: 2021-01-02 19:25:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.service.ts
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Article } from '../../interface/article.interface'

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private ArticleModel) { }

  //查询列表带分页
  async findAll(params: Article, fields?: string): Promise<any | undefined> {
    const result = await this.ArticleModel.find(params).exec()
    return result
  }

  //增加数据
  async addData(params: Article): Promise<any | undefined> {
    const result = this.ArticleModel(params).save()
    return result
  }

  //修改数据
  async updateArticle(params: Article, params2: Article): Promise<any | undefined> {
    const result = this.ArticleModel.updateOne(params, params2)
    return result
  }

  //删除数据
  deleteArticle(params: Article): Promise<any | undefined> {
    return this.ArticleModel.deleteOne(params)
  }
}
