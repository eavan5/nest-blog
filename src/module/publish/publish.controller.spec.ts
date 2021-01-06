import { Test, TestingModule } from '@nestjs/testing';
import { PublishController } from './publish.controller';

describe('PublishController', () => {
  let controller: PublishController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PublishController],
    }).compile();

    controller = module.get<PublishController>(PublishController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
