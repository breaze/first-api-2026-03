import { Module } from '@nestjs/common';
import { PeopleService } from './people.service.js';
import { PEOPLE_SERVICE } from './tokens.js';
import { PeopleController } from './people.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { People } from './people.js';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  providers: [
    {
      provide: PEOPLE_SERVICE,
      useClass: PeopleService
    },
  ],
  controllers: [PeopleController],
  exports: [PEOPLE_SERVICE]
})
export class PeopleModule {}
