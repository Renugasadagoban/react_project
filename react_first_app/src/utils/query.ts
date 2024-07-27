export interface Query {
    email: string;
    queryTitle: string;
    queryDesc: string;
    loginId?:string;
}

export interface LoginValidation {
    email: string;
    password: String
    isLoggedIn:boolean
}

 