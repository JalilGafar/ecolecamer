import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

interface EtsForm {
    nom : string;
    prenom: string;
    etablissement: string;
    ville: string;
    comment: string;
    email:  string;
    phone:string;
  }
const API_URL = `${environment.apiUrl}/api/test/`;
//const API_URL = 'http://localhost:3000/';

@Injectable ({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient){}

    getPublicContent(): Observable<any>{
        return this.http.get(API_URL + 'all', {responseType: 'text'})
    }
    getUserBoard(): Observable<any>{
        return this.http.get(API_URL + 'user', {responseType: 'text'})
    }
    getModeratorBoard(): Observable<any>{
        return this.http.get(API_URL + 'mod', {responseType: 'text'})
    }
    getAdminBoard(): Observable<any>{
        return this.http.get(API_URL + 'admin', {responseType: 'text'})
    }

    postEts(etsForm: {nom : string, prenom: string, etablissement: string, ville: string;
                    comment: string, email:  string, phone:string;}): Observable <EtsForm> {
        console.log(etsForm);
        return this.http.post<EtsForm>(`${environment.apiUrl}/api/ets`, etsForm);
    }
   // getAdminBoard(): Observable<any>{
   //     return this.http.get(API_URL + 'admin')
   // }
   
}