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
    price: Price;
    typeOfPayment: string;
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

export interface Price {
    regularPrice: number,
    temporaryPrice: number
}

export interface AccommodationSearch {
    location: string;
    guests: number;
    startDate: string;
    endDate: string;
}

export interface AccommodationFilter {
    featuredHost: boolean;
    minPrice: number;
    maxPrice: number;
    offer: Offer;
}