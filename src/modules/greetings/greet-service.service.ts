import { Injectable } from '@nestjs/common';
import { GreetServiceInterface } from './greet-service-interface.js';
import { GreetGroupInDto } from './dto/greet-group-in-dto.js';
import { GreetGroupOutDto } from './dto/greet-group-out-dto.js';
import { GreetPersonOutDto } from './dto/greet-person-out-dto.js';

@Injectable()
export class GreetServiceService implements GreetServiceInterface{
    greetPerson(name: string): GreetPersonOutDto {
        if(name==''){
            return {
                greeting: '',
                successful: false
            }
        }
        return {
            greeting: `Hello ${name}`,
            successful: true
        }
    }
    greetGroup(greetGroupInDTO: GreetGroupInDto): GreetGroupOutDto {
        if(greetGroupInDTO == null 
            || greetGroupInDTO == undefined 
            || greetGroupInDTO.people.length == 0){
            return {
                greeting: '',
                successful: false
            }
        }
        let out:string = "Hello ";
        greetGroupInDTO.people.forEach(person => {
            out += `, ${person}`;
        });
        return {
            greeting: out,
            successful: true
        }
    }
    
}
