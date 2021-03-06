import { Test, TestingModule } from '@nestjs/testing';
import { DriverLicensesController } from './driver_licenses.controller';
import { DriverLicensesService } from './driver_licenses.service';

describe('DriverLicensesController', () => {
  let controller: DriverLicensesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriverLicensesController],
      providers: [DriverLicensesService],
    }).compile();

    controller = module.get<DriverLicensesController>(DriverLicensesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
