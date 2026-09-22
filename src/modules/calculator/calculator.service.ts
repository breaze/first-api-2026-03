import { Injectable } from '@nestjs/common';
import { CalculatorServiceInterface } from './calculator-service-interface.js';
import { AdditionInDto } from './dtos/addition-in-dto.js';
import { AdditionOutDto } from './dtos/addition-out-dto.js';

@Injectable()
export class CalculatorService implements CalculatorServiceInterface{
    addition(additionInDTO: AdditionInDto): AdditionOutDto {
        if(additionInDTO == null || additionInDTO == undefined || additionInDTO.number1 == undefined || additionInDTO.number2 == undefined){
            return {
                res: 0,
                success: false
            }
        }
        let res:number = additionInDTO.number1 + additionInDTO.number2;
        return {
            res: res,
            success: true
        }
    }
}
