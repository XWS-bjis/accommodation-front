export interface User{
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    role: string,
    address: Address,
    highlightedHost:boolean
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


export interface Address{
    streetNumber:String,
    streetName:String,
    postalCode:String,
    town:String,
    country:String
}

export interface LogedUser{
    id: string,
    role: string
}
