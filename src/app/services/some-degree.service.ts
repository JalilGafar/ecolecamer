import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Diplome } from "../admin/models/diplome.model";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })

export class SomeDegreeService {

    constructor (private http: HttpClient){};

    getSomeDegree(degree : string): Observable<Diplome[]> {
        //return this.topnewss;
        const url = `${environment.apiUrl}/api/someDegree`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('Degree', degree);
        return this.http.get<Diplome[]>(url, {params: queryParams});
    }
}