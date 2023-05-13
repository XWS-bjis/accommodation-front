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
    typeOfPayment: string
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

export interface AccommodationFilter{
    location: string;
    guests: number;
    startDate: string;
    endDate: string;
}