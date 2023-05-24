import { Injectable } from '@angular/core';
import { TopNews } from '../core/model/top-news-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopNewsService {

    constructor (private http: HttpClient){};

  getAllTopNews(): Observable<TopNews[]> {
    //return this.topnewss;
    return this.http.get<TopNews[]>('http://localhost:3000/api/topNewsSlide');
  }
}