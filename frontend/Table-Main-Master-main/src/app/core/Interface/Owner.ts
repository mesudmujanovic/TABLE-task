import { Car } from "./car";

export interface Owner {
    id?: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    carDtoList?: Car[];
}