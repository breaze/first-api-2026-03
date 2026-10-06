import { CreatePersonInDto } from "./dto/create-person-in-dto.js";
import { CreatePersonOutDto } from "./dto/create-person-out-dto.js";
import { GetPeopleOutDto } from "./dto/get-people-out-dto.js";
import { GetPersonOutDto } from "./dto/get-person-out-dto.js";
import { UpdatePersonInDto } from "./dto/update-person-in-dto.js";
export interface PeopleServiceInterface {
	createPerson(createPersonInDTO: CreatePersonInDto): Promise<CreatePersonOutDto>;
	getPerson(personId: number): Promise<GetPersonOutDto>;
	getPeople(): Promise<GetPeopleOutDto>;
	updatePerson(personId: number, updatePersonInDTO: UpdatePersonInDto): Promise<boolean>;
	deletePerson(personId: number):Promise<boolean>;
}