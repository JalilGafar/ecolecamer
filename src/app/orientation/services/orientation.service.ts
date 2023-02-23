import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { degree } from "src/app/core/model/degree-model";
import { field } from "src/app/core/model/field-model";
import { UserProfil } from "src/app/core/model/user-profil-model";
import { ville } from "src/app/core/model/ville-model";
import { environment } from "src/environments/environment";

@Injectable ()
export class OrientationService {

    constructor(private http: HttpClient) { };

    TheUser!: UserProfil;
    initialUser = {
        id:0,
        city: '',
        degree: '',
        field: '',
        name: '',
        surname: '',
        statuts:'',
        level: '',
        bornDate: '',
        email:'',
        tel: '',
        sercheDate: new Date("2023-01-01"),
    };

    initUser (): UserProfil {
    return this.initialUser;    
    }

    getAllCyties(): Observable<ville[]> {
    return this.http.get<ville[]>(`${environment.apiUrl}/cyties`)
    };

    getAllDomaine(): Observable<field[]> {
        return this.http.get<field[]>(`${environment.apiUrl}/field`)
    }

    getDegreeCyti(degreeCyti:string): Observable<degree[]>{
        const url = `${environment.apiUrl}/degree`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('DegreeCyti', degreeCyti);

       // console.log(queryParams);
        return this.http.get<degree[]>(url, {params: queryParams})
    };
      
    saveCytiIn (cyti : string) {
        this.initialUser.city = cyti;
        console.log(this.initialUser);
    }

    saveDegree (degree : string) {
        this.initialUser.degree = degree;
        console.log(this.initialUser);
    }
}