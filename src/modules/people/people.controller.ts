import { Body, Controller, Delete, Get, Inject, Param, Post, Put } from '@nestjs/common';
import { PEOPLE_SERVICE } from './tokens.js';
import type { PeopleServiceInterface } from './people-service-interface.js';
import { CreatePersonInDto } from './dto/create-person-in-dto.js';
import { UpdatePersonInDto } from './dto/update-person-in-dto.js';

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
  @Get(':id')
  getPerson(@Param('id') id: number){
    return this.peopleService.getPerson(id);
  }

  @Get('')
  getPeople(){
    return this.peopleService.getPeople();
  }

  @Delete(':id')
  deletePerson(@Param('id') id: number){
    return this.peopleService.deletePerson(id);
  }
  @Put(':id')
  updatePersona(@Param('id') id:number, @Body() dto: UpdatePersonInDto){
    return this.peopleService.updatePerson(id, dto);
  }
}
