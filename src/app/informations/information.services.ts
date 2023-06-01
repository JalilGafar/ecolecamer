import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { interestelt } from "src/app/core/model/interest-item-model"
import { environment } from "src/environments/environment";

@Injectable()
export class InfoServices {

    constructor(private http: HttpClient) { };

    getFirstInterestSchool(page : string): Observable<interestelt[]> {
        const url = `${environment.apiUrl}/api/interest`;
        let queryParams = new HttpParams();
        queryParams = queryParams.append('Page', page);
        return this.http.get<interestelt[]>(url, {params: queryParams})
    };
}