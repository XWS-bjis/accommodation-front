export interface Host {
    id: string,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    role: string,
    address: Address
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

export interface CompleteUser{
    id: string,
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    role: string,
    address: Address
}