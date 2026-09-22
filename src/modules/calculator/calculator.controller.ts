import { Body, Controller, Inject, Post } from '@nestjs/common';
import type { CalculatorServiceInterface } from './calculator-service-interface.js';
import { CALCULATOR_SERVICE } from './token.js';
import { AdditionInDto } from './dtos/addition-in-dto.js';

@Controller('calculator')
export class CalculatorController {
    constructor(
        @Inject(CALCULATOR_SERVICE)
        private readonly calculatorService: CalculatorServiceInterface
    ){}

    @Post('addition')
    addition(@Body() additionInDTO: AdditionInDto){
        return this.calculatorService.addition(additionInDTO);
    }
}
