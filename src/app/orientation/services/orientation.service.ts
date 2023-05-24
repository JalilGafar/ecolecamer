import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
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

  

    getAllCyties(): Observable<ville[]> {
    return this.http.get<ville[]>(`${environment.apiUrl}/api/cyties`)
    };

    getPartCyties(userDegree: string, userDomaine: string ): Observable<ville[]> {
        const url = `${environment.apiUrl}/api/partCyties`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('Degree', userDegree);
        queryParams = queryParams.append('Domaine', userDomaine);
        return this.http.get<ville[]>(url, {params: queryParams})
    }

    private _domaine$ = new BehaviorSubject<field[]>([]);
    get domaine$(): Observable<field[]> {
        return this._domaine$.asObservable();
    }
    /*
    getDomaineFromServer(domaineDegree:string): Observable<field[]> {
        const url = `${environment.apiUrl}/api/field`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('DomaineDegree', domaineDegree);
        return this.http.get<field[]>(url, {params: queryParams})
        //return this.http.get<field[]>(`${environment.apiUrl}/api/field`)
    }
    */
    getDomaineFromServer(domaineDegree:string){
        const url = `${environment.apiUrl}/api/field`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('DomaineDegree', domaineDegree);
        this.http.get<field[]>(url, {params: queryParams}).pipe(
            tap(fields =>{
                this._domaine$.next(fields)
            })
        ).subscribe();
    }

    /**Fonction qui demande au serveur de retourner les diplomes pour une ville en particulier */
    getDegreeCyti(degreeCyti:string): Observable<degree[]>{
        const url = `${environment.apiUrl}/api/degree`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('DegreeCyti', degreeCyti);
        return this.http.get<degree[]>(url, {params: queryParams})
    };

    /** Fonction qui envoie demande au serveur de retourner les diplomes pour un domaine en particulier */
    getDegreeField(degreeField: string): Observable<degree[]>{
        const url = `${environment.apiUrl}/api/degree`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('DegreeField', degreeField);
        return this.http.get<degree[]>(url, {params: queryParams})
    }
      
    saveCytiIn (cyti : string) {
        this.initialUser.city = cyti;
        console.log(this.initialUser);
    }

    saveDegree (degree : string) {
        this.initialUser.degree = degree;
        console.log(this.initialUser);
    }

    saveField(domaine: string) {
        this.initialUser.field = domaine;
        console.log(this.initialUser);
    }

    initUser () {
        this.saveCytiIn('');
        this.saveDegree('');
        this.saveField('');
        console.log(this.initialUser)

    }
}