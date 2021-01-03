/*
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-01-03 21:55:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
import * as compression from 'compression';
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // 错误拦截中间件
  app.useGlobalFilters(new HttpExceptionFilter());
  //成功的数据返回中间件
  app.useGlobalInterceptors(new TransformInterceptor());
  // 压缩返回数据
  app.use(compression());
  // 为了安全用的
  app.use(helmet());
  //打开cors
  app.enableCors();
  await app.listen(3000);
}
bootstrap();
