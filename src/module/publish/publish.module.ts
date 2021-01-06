import { Module } from '@nestjs/common';
import { PublishService } from './publish.service';
import { PublishController } from './publish.controller';

@Module({
  providers: [PublishService],
  controllers: [PublishController]
})
export class PublishModule {}
