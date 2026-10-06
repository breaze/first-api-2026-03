import { Body, Controller, Inject, Post } from '@nestjs/common';
import { PEOPLE_SERVICE } from './tokens.js';
import type { PeopleServiceInterface } from './people-service-interface.js';
import { CreatePersonInDto } from './dto/create-person-in-dto.js';

@Controller('people')
export class PeopleController {
    constructor(
    @Inject(PEOPLE_SERVICE)
    private readonly peopleService: PeopleServiceInterface,
  ) {}

  @Post('')
  createPerson(@Body() dto: CreatePersonInDto) {
    return this.peopleService.createPerson(dto);
  }
}
