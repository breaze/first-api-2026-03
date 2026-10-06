import { Module } from '@nestjs/common';
import { PeopleService } from './people.service.js';
import { PEOPLE_SERVICE } from './tokens.js';
import { PeopleController } from './people.controller.js';

@Module({
  providers: [
    {
      provide: PEOPLE_SERVICE,
      useClass: PeopleService
    },
  ],
  controllers: [PeopleController],
})
export class PeopleModule {}
