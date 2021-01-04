/*
 * @Author: wumao
 * @Date: 2021-01-04 16:54:00
 * @LastEditTime: 2021-01-04 22:48:56
 * @LastEditors: wumao
 * @Description:  
 * @FilePath: /nest-blog/src/module/meta/meta.controller.ts
 * @website: https://www.wumao.org
 */
import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { MetaService } from './meta.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('meta')
export class MetaController {
  constructor(private MetaService: MetaService) { }
  @Get(':type')
  getMta(@Param() param: { type: string }) {
    return this.MetaService.getMeta(param.type)
  }

  @UseGuards(AuthGuard('jwt'))
  @Post()
  addMeta(@Body() body: any) {
    return this.MetaService.addMeta(body)
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':_id')
  deleteMeta(@Param() param: any) {
    return this.MetaService.deleteMeta(param._id)
  }

  @UseGuards(AuthGuard('jwt'))
  @Put(':_id')
  changeMeta(@Param() param: any, @Body() body: any) {
    return this.MetaService.changeMeta(param._id, body)

  }

}
