import { Controller, Post, UseInterceptors, UploadedFile, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express'
import { PublishService } from './publish.service'
import { AuthGuard } from '@nestjs/passport';


// const oss = require('ali-oss');
// const upload1 = multer({
//   storage: Mao({
//     config: {
//       region: 'oss-cn-hangzhou',
//       accessKeyId: 'LTAI4GFneB7JdtLCwBTXruwQ',
//       accessKeySecret: 'IksNSBldjOgdjeYv1UJPpl3VYNRWYP',
//       bucket: 'nestblog'
//     }
//   })
// });

@Controller('publish')

export class PublishController {
  constructor(private PublishService: PublishService) { }

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    // const client = new oss({
    //   accessKeyId: 'LTAI4GFneB7JdtLCwBTXruwQ',
    //   accessKeySecret: 'IksNSBldjOgdjeYv1UJPpl3VYNRWYP',
    //   bucket: 'nestblog',
    //   region: 'oss-cn-hangzhou'
    // });
    // console.log(file);
    return this.PublishService.upload(file)
    // console.log(result);


    // console.log(file);
  }

}
