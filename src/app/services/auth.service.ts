import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

const AUTH_API = `${environment.apiUrl}/api/auth/`;

const httpOptions = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) {}

    login (credentials: { username: string; password: string; }): Observable<any>{
        return this.http.post(AUTH_API + 'signin', {
            username : credentials.username,
            password: credentials.password
        }, httpOptions)
    }

    register(user: { username: string; email: string; password: string; }):  Observable<any> {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions)
    }


 //  private token ='MyFakeToken';

 //  getToken(): string{
 //      return this.token;
 //  }
}