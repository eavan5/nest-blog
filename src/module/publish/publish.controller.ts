import { Controller, Post, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { PublishService } from './publish.service'
import { AuthGuard } from '@nestjs/passport';
@Controller('publish')

export class PublishController {
  constructor(private PublishService: PublishService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    return this.PublishService.upload(file)
  }

}
