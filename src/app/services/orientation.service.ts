import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ville } from '../core/model/ville-model';

@Injectable({
  providedIn: 'root'
})
export class OrientationService {

  constructor(private http: HttpClient) { }

  getAllCyties(): Observable<ville[]> {
    return this.http.get<ville[]>('http://localhost:3000/cyties')
  }
}
