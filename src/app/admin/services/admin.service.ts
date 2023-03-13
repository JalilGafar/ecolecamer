import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, catchError, delay, map, Observable, switchMap, tap, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { Campus } from "../models/campus.mode";
import { Ecole } from "../models/ecole.model";
import { Formation } from "../models/formation.model";
import { Universite } from "../models/univ.model";

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

    getEcoleFromServer(){
      this.setLoadingStatus(true);
      this.http.get<Ecole[]>(`${environment.apiUrl}/ecoles`).pipe(
        tap(ecoles =>{
          this._ecole$.next(ecoles);
          this.setLoadingStatus(false);
        })
      ).subscribe();
    }

    getCampusFromServer(){
      this.setLoadingStatus(true);
      this.http.get<Campus[]>(`${environment.apiUrl}/campus`).pipe(
        tap(campus =>{
          this._campus$.next(campus);
          this.setLoadingStatus(false);
        })
      ).subscribe();
    }
}

