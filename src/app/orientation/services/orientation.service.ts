import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { degree } from "src/app/core/model/degree-model";
import { field } from "src/app/core/model/field-model";
import { UserProfil } from "src/app/core/model/user-profil-model";
import { ville } from "src/app/core/model/ville-model";
import { environment } from "src/environments/environment";
import { Contact } from "src/app/core/model/contact-model";
import { interestelt } from "src/app/core/model/interest-item-model";


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
        level: '',
        statuts:'',
        bornDate: 0,
        country: '',
        email:'',
        tel: ''
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
        // console.log(this.initialUser);
    }

    saveDegree (degree : string) {
        this.initialUser.degree = degree;
        // console.log(this.initialUser);
    }

    saveField(domaine: string) {
        this.initialUser.field = domaine;
        // console.log(this.initialUser);
    }

    saveStatut(statut: string) {
        this.initialUser.statuts = statut;
         
    }

    saveClasse(classe: string) {
        this.initialUser.level = classe;
    }

    saveContact(contact: Contact) {
        this.initialUser.name = contact.nom;
        this.initialUser.surname = contact.prenom;
        this.initialUser.bornDate = contact.born;
        this.initialUser.email = contact.email;
        this.initialUser.tel = contact.phone;
        this.initialUser.country = contact.pays;
        
        this.saveClient(this.initialUser).subscribe();
        //this.getSerchResult(this.initialUser);
    }

    saveClient (UserInfo : {city: string, degree: string, field: string,
                            name: string, surname: string, statuts: string, level: string,
                            bornDate: number, email: string, tel: string, country: string
                        }): Observable<UserProfil> {
        console.log(UserInfo)
       return this.http.post<UserProfil>(`${environment.apiUrl}/api/result`, UserInfo)
       // return this.http.get<Resultats[]>(`${environment.apiUrl}/api/result`, {params:UserInfo} )
    };

    getSerchResult(): Observable<interestelt[]> {
        const url = `${environment.apiUrl}/api/result`;
        let queryParams = {"city":this.initialUser.city,"diplome":this.initialUser.degree, "domaine":this.initialUser.field};
        return this.http.get<interestelt[]>(url, {params: queryParams})
    }

    initUser () {
        this.saveCytiIn('');
        this.saveDegree('');
        this.saveField('');
        console.log(this.initialUser)

    }
}