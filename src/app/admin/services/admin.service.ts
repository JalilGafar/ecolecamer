import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, map, Observable, tap } from "rxjs";
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

