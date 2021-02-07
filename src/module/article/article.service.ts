/* eslint-disable @typescript-eslint/no-unused-vars */
/*
 * @Author: your name
 * @Date: 2021-01-02 12:52:05
 * @LastEditTime: 2021-02-07 23:01:03
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
import { ArticleList } from '../../interface/pagination.interface';
import { getDefaultOptions } from './article.model';
// import { Inject } from '@nestjs/common';

@Injectable()
export class ArticleService {
  constructor(
    @InjectModel('Article') private ArticleModel,
    @InjectModel('Meta') private MetaModel,
    // @Inject('moment') private moment: moment.Moment
  ) { }

  //获取最热的文章
  async getHotArticlesList(length: number): Promise<any | undefined> {
    return await this.ArticleModel.find({ views: { $gt: 20 } }).sort({ views: -1 }).limit(length)
  }

  //查询列表带分页
  async findAll(
    params: ArticleList = {},
    getTotal?: boolean,
    fields?: string,
  ): Promise<any | undefined> {
    const { pageSize = 10, pageCurrent = 1, tagId, categoryId } = params;
    let searchParams = { tag_id: tagId, category_id: categoryId }
    searchParams = JSON.parse(JSON.stringify(searchParams))
    const searchParamsTemp = {}
    for (const key in searchParams) {
      searchParamsTemp[key] = {
        $elemMatch: { $eq: searchParams[key] }
      }
    }
    if (getTotal) {
      return await this.ArticleModel.find(searchParamsTemp, fields).countDocuments()
    } else {
      return await this.ArticleModel.find(searchParamsTemp, fields)
        .select('-content')
        .populate('category_id')
        .populate("tag_id")
        .sort({ _id: -1 })
        .skip((pageCurrent - 1) * pageSize)
        .limit(+pageSize);
    }

  }

  //查找文章
  async findOne(id: string): Promise<any> {
    try {
      const article = await this.ArticleModel.findOneAndUpdate(
        { _id: id },
        { $inc: { views: 1 } },
        { useFindAndModify: false },
      ).populate('category_id').populate("tag_id").exec();
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
    } catch (error) { }
  }

  //查找分类或者标签下的文章
  async getMetaArticleList(type, _id, pageInfo): Promise<any | undefined> {
    const { pageSize = 10, pageCurrent = 1 } = pageInfo;
    const res = await this.ArticleModel.find({ [`${type}_id`]: { $elemMatch: { $eq: _id } } }).select('-content')
      .skip((pageCurrent - 1) * pageSize)
      .limit(+pageSize);
    console.log(res);
    return res

    // this.ArticleModel.where({ `type_id`:{$equal:}})


  }

  // 获取文章归档
  async archive() {
    const res = await this.ArticleModel.find()
      .select('title add_time')
    // console.log(res);
    // res.reduce((total, current) => {

    // },{})
    res.forEach(item => {
      console.log(item);

      // console.log(moment);


    })
    return res
  }
}
