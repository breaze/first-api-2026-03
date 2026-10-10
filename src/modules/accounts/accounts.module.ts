import { Module } from '@nestjs/common';
import { PeopleModule } from '../people/people.module.js';

@Module({
    imports: [
        PeopleModule
    ]
})
export class AccountsModule {}