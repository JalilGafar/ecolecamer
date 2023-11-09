import { Injectable } from '@angular/core';
import { TopNews } from '../core/model/top-news-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BEHAVIOR } from '../core/model/Behavior';
import { counter } from '../core/model/counter-model';

@Injectable({
  providedIn: 'root'
})


export class TopNewsService {


    constructor (private http: HttpClient){};

  getAllTopNews(): Observable<TopNews[]> {
    //return this.topnewss;
    return this.http.get<TopNews[]>(`${environment.apiUrl}/api/topNewsSlide`); 
  }

  scrollTo(element: string, behavior: BEHAVIOR): void {
    if (typeof document !== 'undefined') {
      let elementer = document.getElementById(element);
    
      (elementer as HTMLElement).scrollIntoView({behavior: behavior, block:"start", inline:"nearest"})
      // Manipulating the DOM here
   }
  }

  countFormation(): Observable<counter[]> {
    return this.http.get<counter[]>(`${environment.apiUrl}/api/countFomration`); 
  }
}