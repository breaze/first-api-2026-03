import { Injectable } from '@nestjs/common';
import { PeopleServiceInterface } from './people-service-interface.js';
import { CreatePersonInDto } from './dto/create-person-in-dto.js';
import { CreatePersonOutDto } from './dto/create-person-out-dto.js';
import { GetPeopleOutDto } from './dto/get-people-out-dto.js';
import { GetPersonOutDto } from './dto/get-person-out-dto.js';
import { UpdatePersonInDto } from './dto/update-person-in-dto.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { People } from './people.js';

@Injectable()
export class PeopleService implements PeopleServiceInterface{
    constructor(
        @InjectRepository(People)
        private readonly peopleRepository: Repository<People>
    ){}
    getPerson(personId: number): Promise<GetPersonOutDto> {
        throw new Error('Method not implemented.');
    }
    getPeople(): Promise<GetPeopleOutDto> {
        throw new Error('Method not implemented.');
    }
    updatePerson(personId: number, updatePersonInDTO: UpdatePersonInDto): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    deletePerson(personId: number): Promise<boolean> {
        throw new Error('Method not implemented.');
    }
    async createPerson(createPersonInDTO: CreatePersonInDto): Promise<CreatePersonOutDto> {
        const person = await this.peopleRepository.create(createPersonInDTO);
        const outDTO = {
            personId: person.personId,
            name: person.name
        }
        return outDTO;
    }
    
}
