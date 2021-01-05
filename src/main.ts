/*
 * @Author: your name
 * @Date: 2021-01-02 10:59:57
 * @LastEditTime: 2021-01-06 02:20:14
 * @LastEditors: wumao
 * @Description: In User Settings Edit
 * @FilePath: /nest-blog/src/main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './filters/http-exception.filter';
import { TransformInterceptor } from './interceptor/transform.interceptor';
// import * as compression from 'compression';
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  // 错误拦截中间件
  app.useGlobalFilters(new HttpExceptionFilter());
  //成功的数据返回中间件
  app.useGlobalInterceptors(new TransformInterceptor());
  // 压缩返回数据
  // app.use(compression());
  // 为了安全用的
  app.use(helmet());
  //打开cors
  app.enableCors();

  //配置swagger
  const options = new DocumentBuilder().addBearerAuth()
    .setTitle('nest-blog system')
    .setDescription('The nest-blog API description')
    .setVersion('1.0')
    .addTag('wumao')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
