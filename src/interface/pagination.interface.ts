/*
 * @Author: your name
 * @Date: 2021-01-03 14:08:47
 * @LastEditTime: 2021-02-02 20:00:08
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/interface/pagination.interface.ts
 */

export interface Pagination {
  pageSize?: number;
  pageCurrent?: number;
}

export interface ArticleList extends Pagination {
  tagId?: string;
  categoryId?: string;
}
