import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, delay, map, Observable, switchMap, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Campus } from "../models/campus.mode";
import { Ecole } from "../models/ecole.model";
import { Formation } from "../models/formation.model";
import { Universite } from "../models/univ.model";
import { Domaine } from "../models/domaine.model";
import { Categ } from "../models/categ.model";

@Injectable ()
export class AdminService {

    constructor (private http: HttpClient) {}

    private _loading$ = new BehaviorSubject<boolean>(false);
    get loading$(): Observable<boolean> {
      return this._loading$.asObservable();
    }

    private _formation$ = new BehaviorSubject<Formation[]>([]);
    get formation$(): Observable<Formation[]> {
      return this._formation$.asObservable();
    }

    private _universite$ = new BehaviorSubject<Universite[]>([]);
    get universite$(): Observable<Universite[]> {
      return this._universite$.asObservable();
    }

    private _ecole$ = new BehaviorSubject<Ecole[]>([]);
    get ecoles$(): Observable<Ecole[]> {
      return this._ecole$.asObservable();
    }

    private _campus$ = new BehaviorSubject<Campus[]>([]);
    get campus$(): Observable<Campus[]> {
      return this._campus$.asObservable()
    }

    private _categ$ = new BehaviorSubject<Categ[]>([]);
    get categ$(): Observable<Categ[]> {
      return this._categ$.asObservable()
    }

    private _domaine$ = new BehaviorSubject<Domaine[]>([]);
    get domaine$(): Observable<Domaine[]> {
      return this._domaine$.asObservable()
    }

    private lastCandidatesLoad = 0;

    private setLoadingStatus(loading: boolean) {
      this._loading$.next(loading)
    }

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(() => new Error('Something bad happened; please try again later.'));
    }

     //***************  FUNCTIONS TO GET DOMAINE AND CATEGORIES **************/

    getDomaineFromServer(){
       this.http.get<Domaine[]>(`${environment.apiUrl}/domaine`).pipe(
        tap(domaine =>{
          this._domaine$.next(domaine);
        })
      ).subscribe();
    }

    getCategFromServer(){
      this.http.get<Categ[]>(`${environment.apiUrl}/categ`).pipe(
        tap(categ =>{
          this._categ$.next(categ);
        })
      ).subscribe();
    }

    //********************* FORMATION FUNCTIONS ************************/

    //**Get all formations with campu and unic connection */
    getFormationsFromServer () {
        if (Date.now() - this.lastCandidatesLoad <= 10000) {
            return;
        }
        this.setLoadingStatus(true);
        this.http.get<Formation[]>(`${environment.apiUrl}/formations`).pipe(
            delay(2000),
            tap(formations => {
                this.lastCandidatesLoad = Date.now();
                this._formation$.next(formations);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }

    getFormationById(id: number): Observable<Formation>{
      if (!this.lastCandidatesLoad) {
          this.getFormationsFromServer()
      }
      return this.formation$.pipe(
          map(formations => formations.filter(formation => formation.id_form === id)[0])
      );
    }

    addNewFormation(formationForm: {nom_f: string, nom_diplome: string, admission_diplome: string, 
                      descriptif_diplome: string, condition_diplome: string, niveau_diplome: string, categ_id: number,      
                      ecole_id: number, domaine_id: number, date_debut_f: string, duree_f: string,
                      cout_f: string, programme_f: string, descriptif_f: string}): Observable<Formation>{
      return this.http.post<Formation>(`${environment.apiUrl}/newFormation`, formationForm);
    }


    //*************** UNIVERSITY FUNCTIONS **************/

    getUniversiteFromServer(){
      this.setLoadingStatus(true);
      this.http.get<Universite[]>(`${environment.apiUrl}/universites`).pipe(
        tap(universites =>{
          this._universite$.next(universites);
          this.setLoadingStatus(false);
        })
      ).subscribe();
    }

    getUniversiteById(id: number): Observable<Universite>{
      if (!this.lastCandidatesLoad) {
          this.getUniversiteFromServer()
      }
      return this.universite$.pipe(
          map(universite => universite.filter(universite => universite.id_univ === id)[0])
      );
    }

    addNewUniv(univForm :{  nom_univ: string, sigle_univ: string, type_univ: string,
                            ville_univ: string, tel_univ: string, email_univ: string,
                            siteweb_univ: string, recteur_univ: string, mot_du_recteur: string, descriptif_univ: string
                          }): Observable<Universite>{
      console.log(univForm);
      return this.http.post<Universite>(`${environment.apiUrl}/newUniversites`, univForm);
    }

    editUniv(univForm :{  id_univ: number, nom_univ: string, sigle_univ: string, type_univ: string,
                          ville_univ: string, tel_univ: string, email_univ: string,
                          siteweb_univ: string, recteur_univ: string, mot_du_recteur: string, descriptif_univ: string
                        }):Observable<Universite>{
      
      return this.http.put<Universite>(`${environment.apiUrl}/editUniversite`, univForm);
    }

    deletUnivById(univId: number): Observable<unknown>{
      let url = `${environment.apiUrl}/deletUniversite`;
      let idParams = new HttpParams();
      idParams = idParams.append('idUniv', univId);
      console.log ('DELET ' + univId)
      return this.http.delete(url, {params: idParams})
    }

    //************* ECOLE FUNCTIONS ***************/

    getEcoleFromServer(){
      this.setLoadingStatus(true);
      this.http.get<Ecole[]>(`${environment.apiUrl}/ecoles`).pipe(
        tap(ecoles =>{
          this._ecole$.next(ecoles);
          this.setLoadingStatus(false);
        })
      ).subscribe();
    };

    getEcoleById(id: number):Observable<Ecole>{
      return this.ecoles$.pipe(
        map(ecoles => ecoles.filter(ecole => ecole.id_ecol === id)[0])
    );
    };

    addNewEcole(  ecoleForm: {nom_e: string, sigle_e: string,
                logo_e: string, niveau_e: string, langue_e: string, date_creation: string,
                tel_1_e: string, email_e: string, bp_e: string, directeur_e: string,
                photo_directeur: string, mot_directeur: string, stat_e: string, descriptif_e: string,
                image_e: string, universites_id: number, campus_id: number}):Observable<Ecole>{
      
       return this.http.post<Ecole>(`${environment.apiUrl}/newEcole`, ecoleForm);
    };

    
    editEcole(ecoleForm :{ id_ecol: number,  nom_e: string, sigle_e: string, logo_e: string, 
                          niveau_e: string, langue_e: string, date_creation: string, tel_1_e: string, 
                          email_e: string, bp_e: string, directeur_e: string, photo_directeur: string, 
                          mot_directeur: string, stat_e: string, descriptif_e: string, image_e: string, 
                          universites_id: number,   }):Observable<Ecole>{

      return this.http.put<Ecole>(`${environment.apiUrl}/editEcole`, ecoleForm);
    }

    deletEcoleById(ecoleId:number): Observable<unknown>{
      let url = `${environment.apiUrl}/deletEcole`;
      let idParams = new HttpParams();
      idParams = idParams.append('idEcole', ecoleId);
      return this.http.delete(url, {params: idParams})
    }

    //*********** CAMPUS FUNCTIONS *******************/

    getCampusFromServer(){
      this.setLoadingStatus(true);
      this.http.get<Campus[]>(`${environment.apiUrl}/campus`).pipe(
        tap(campus =>{
          this._campus$.next(campus);
          this.setLoadingStatus(false);
        })
      ).subscribe();
    }

    getCampusById(id: number): Observable<Campus>{
      if (!this.lastCandidatesLoad) {
          this.getCampusFromServer()
      }
      return this.campus$.pipe(
          map(campus => campus.filter(campus => campus.id_camp === id)[0])
      );
    };

    editCamp(campusForm : {id_camp: number, nom_camp: string, ville_cam: string, principal_camp: boolean,
            descriptif_camp: string, lon_camp: number, 
            lat_camp: number}): Observable<Campus>{
      
      return this.http.put<Campus>(`${environment.apiUrl}/editCampus`, campusForm);
    }

    deletCampusById(campId: number): Observable<unknown>{
      let url = `${environment.apiUrl}/deletCampus`;
      let idParams = new HttpParams();
      idParams = idParams.append('idCamp', campId);
      console.log ('DELET ' + campId)
      return this.http.delete(url, {params: idParams})
    }

    addNewCampus(newCamp : {nom_camp: string, ville_cam: string, principal_camp: boolean,
                            descriptif_camp: string, lon_camp: number, 
                            lat_camp: number}): Observable<Campus>{
      return this.http.post<Campus>(`${environment.apiUrl}/newCampus`, newCamp);
    }
}

