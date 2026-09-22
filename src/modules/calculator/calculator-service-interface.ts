import { AdditionInDto } from "./dtos/addition-in-dto.js";
import { AdditionOutDto } from "./dtos/addition-out-dto.js";

export interface CalculatorServiceInterface {
    addition(additionInDTO: AdditionInDto):AdditionOutDto;
}
