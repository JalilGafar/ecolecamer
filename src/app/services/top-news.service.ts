import { Injectable } from '@angular/core';
import { TopNews } from '../core/model/top-news-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

    constructor (private http: HttpClient){};

  getAllTopNews(): Observable<TopNews[]> {
    //return this.topnewss;
    return this.http.get<TopNews[]>(`${environment.apiUrl}/api/topNewsSlide`); 
  }
}