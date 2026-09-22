import { Module } from '@nestjs/common';

import { CALCULATOR_SERVICE } from './token.js';
import { CalculatorService } from './calculator.service.js';
import { CalculatorController } from './calculator.controller.js';

@Module({
  controllers: [CalculatorController],
  providers: [{
    provide: CALCULATOR_SERVICE,
    useClass: CalculatorService
  }],
  
})
export class CalculatorModule {}
