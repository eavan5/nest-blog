import { Injectable } from '@nestjs/common';
import * as oss from 'ali-oss'
import { OSS_CONFIG } from '../../app.config'

@Injectable()
export class PublishService {
  async upload(file: any) {
    const client = new oss(OSS_CONFIG);
    const result = await client.put(`${Date.now()}.${file.originalname.split('.').slice(-1)}`, file.buffer);
    return {
      message: "上传成功",
      url: OSS_CONFIG.url + result.name
    }
  }
}
