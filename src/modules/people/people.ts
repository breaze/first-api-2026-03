import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('people')
export class People {
    @PrimaryGeneratedColumn({name:'person_id'})
    personId: number;
    @Column({name:'name'})
    name:string;
}
