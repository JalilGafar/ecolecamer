import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
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
}
