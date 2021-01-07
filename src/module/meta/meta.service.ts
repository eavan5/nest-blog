/*
 * @Author: wumao
 * @Date: 2021-01-04 17:24:16
 * @LastEditTime: 2021-01-04 22:48:42
 * @LastEditors: wumao
 * @Description:
 * @FilePath: /nest-blog/src/module/meta/meta.service.ts
 * @website: https://www.wumao.org
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class MetaService {
  constructor(@InjectModel('Meta') private MetaModel) {}
  //查所有
  async getMeta(type: string): Promise<any> {
    return await this.MetaModel.find({ type: +type });
  }

  //增加单个标签
  async addMeta(body) {
    await this.MetaModel({
      ...body,
    }).save();

    return {
      msg: '添加标签成功',
    };
  }

  async deleteMeta(_id: string) {
    const result = await this.MetaModel.deleteOne({ _id });
    console.log(result);
    if (result.deletedCount === 1) {
      return { msg: '删除成功' };
    }
  }
  async changeMeta(_id: string, body) {
    await this.MetaModel.findOneAndUpdate({ _id }, body);
    // console.log(result);
    // if (result.deletedCount === 1) {
    return { msg: '修改成功' };
    // }
  }
}
