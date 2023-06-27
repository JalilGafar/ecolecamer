import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map, tap } from "rxjs";
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
         }
    initialUser$!: Observable<UserProfil>;
  

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

    /*Fonction qui demande de retourner les domaines pour un diplome en particulier pour toutes les villes
     Car une foi qu'o aura le diplome et le domaine d'intérêt, on enclanche getPartCyties() pour 
     avoir les villes qui offrent ces formations */
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

    getPartDomaine(domaineDegree:string, domaineCyti:string): Observable <field[]> {
        const url = `${environment.apiUrl}/api/field`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('DomaineDegree', domaineDegree);
        queryParams = queryParams.append('DomaineCyti', domaineCyti);
        return this.http.get<field[]>(url, {params: queryParams})
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

    //** FUNCTION USE TO SAVE degree, field, cyti and statut *****/

    saveStatut(degree: string, field:string, cyti:string, statut: string) {
       this.initialUser.degree = degree;
        this.initialUser.field = field;
        this.initialUser.city = cyti;
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
        console.log(this.initialUser);
    }

    saveClient (UserInfo : UserProfil ): Observable<UserProfil> {
       return this.http.post<UserProfil>(`${environment.apiUrl}/api/result`, UserInfo)
    };

    getSerchResult(): Observable<interestelt[]> {
        const url = `${environment.apiUrl}/api/result`;
        let queryParams = {"city":this.initialUser.city,"diplome":this.initialUser.degree, "domaine":this.initialUser.field};

        return this.http.get<interestelt[]>(url, {params: queryParams})
    }

    initUser() {
        this.initialUser =  {
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
        }
    }
}