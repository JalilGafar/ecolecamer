import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserProfil } from "src/app/core/model/user-profil-model";
import { ville } from "src/app/core/model/ville-model";

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
    return this.http.get<ville[]>('http://localhost:3000/cyties')
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