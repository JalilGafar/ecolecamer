import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, delay, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { Formation } from "../models/formation.model";

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
}
