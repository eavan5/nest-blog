/*
 * @Author: your name
 * @Date: 2021-01-03 19:25:03
 * @LastEditTime: 2021-01-03 19:44:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/module/article/article.model.ts
 */

export function getDefaultOptions() {
  return {
    add_time: Date.now(),
    views: 0,
    hidden: 0,
  };
}
