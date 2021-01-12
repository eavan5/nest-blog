/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: your name
 * @Date: 2021-01-02 12:52:05
 * @LastEditTime: 2021-01-12 00:36:12
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.service.ts
 */
import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article } from '../../interface/article.interface';
import { Pagination } from '../../interface/pagination.interface';
import { getDefaultOptions } from './article.model';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private ArticleModel,
    @InjectModel('Meta') private MetaModel,
  ) {}

  //查询列表带分页
  async findAll(
    params: Pagination = {},
    fields?: string,
  ): Promise<any | undefined> {
    const { pageSize = 10, pageCurrent = 1 } = params;
    return await this.ArticleModel.find({}, fields)
      .sort({ _id: -1 })
      .skip((pageCurrent - 1) * pageSize)
      .limit(+pageSize);
  }

  //查找文章
  async findOne(id: string): Promise<any> {
    try {
      const article = await this.ArticleModel.findOneAndUpdate(
        { _id: id, hidden: 0 },
        { $inc: { views: 1 } },
        { useFindAndModify: false },
      )
        .populate('category_id')
        .populate('tag_id');
      return {
        msg: 'success',
        articleData: article,
      };
    } catch (error) {
      throw new NotFoundException({
        message: '找不到这篇文章',
      });
    }
  }

  //查询文章数量
  async findCount(): Promise<any> {
    return await this.ArticleModel.countDocuments();
  }

  //增加数据
  async addData(params: Article): Promise<any | undefined> {
    const data = { ...params, ...getDefaultOptions() };
    console.log(data);

    try {
      await this.ArticleModel({ ...params, ...getDefaultOptions() }).save();
      return { msg: '添加成功' };
    } catch (error) {
      throw new NotAcceptableException({ message: error.message });
    }
  }

  //修改数据
  async updateArticle(
    params: Article,
    params2: Article,
  ): Promise<any | undefined> {
    await this.ArticleModel.updateOne(params, {
      ...params2,
      update_time: Date.now(),
    });
    return {
      msg: '恭喜您,修改成功',
    };
  }

  //删除数据
  async deleteArticle(id: string): Promise<any | undefined> {
    const data = { _id: id };
    console.log(22);
    console.log(data);

    const result = await this.ArticleModel.updateOne(
      { _id: id },
      { hidden: 1 },
    );
    console.log(result);
    return {
      mag: '恭喜您,删除成功',
    };
  }

  //添加评论
  async addComment(id: string, body: any): Promise<any | undefined> {
    try {
      await this.ArticleModel.findOneAndUpdate(
        { _id: id },
        { $push: { comment: body } },
        { useFindAndModify: false },
      );
      return {
        msg: '评论成功',
      };
    } catch (error) {}
  }
}
