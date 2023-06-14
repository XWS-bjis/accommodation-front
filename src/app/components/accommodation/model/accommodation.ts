import { CompleteUser, User } from "../../user/model/register.model";

export interface Accommodation {
    id : string,
    hostId : number,
    name : string,
    address : Address;
    offers : Offer;
    pictures : string[];
    minimalAllowedGuests : number;
    maximalAllowedGuests : number;
    avgGrade: number | undefined;
    grades: Grade[];
} 

export interface Grade {
    id: string,
    createdAt: string,
    reviewerId: string,
    value: number,
    reviewer: CompleteUser | undefined,
}

export interface Address {
    streetNumber : String,
    streetName : String,
    postalCode : String,
    town : String,
    country : String
}

export interface Offer {
    wifi : boolean,
    parking : boolean,
    kitchen : boolean,
    airConditioner : boolean,
    petsAllowed : boolean
}