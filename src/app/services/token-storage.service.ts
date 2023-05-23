import { Injectable } from "@angular/core";

 //const TOKEN_KEY = 'auth_token';
// const USER_KEY = 'auth_user';
const TOKEN_KEY = 'x-access-token';
const USER_KEY = 'auth_user';

@Injectable ({
    providedIn : 'root'
})
export class tokenStorageService {
    constructor () {}

    signOut(): void {
        window.sessionStorage.clear();
    }

    public saveToken (token:string): void {
        console.log('dans la fct saveTokent ' + token)
        window.sessionStorage.removeItem(TOKEN_KEY)
        window.sessionStorage.setItem(TOKEN_KEY, token )
    }

    public getToken(): string | null {
        // var tiof = sessionStorage.getItem(TOKEN_KEY);
        // console.log(tiof)
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public saveUser(user: string): void {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
    } 

    public getUser (): any {
        return JSON.parse(sessionStorage.getItem(USER_KEY) || '{}');
    }

    public blade(data:string){
        console.log(data);
    }
}