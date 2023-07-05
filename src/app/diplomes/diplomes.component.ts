import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diplome } from '../admin/models/diplome.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-diplomes',
  templateUrl: './diplomes.component.html',
  styleUrls: ['./diplomes.component.scss']
})
export class DiplomesComponent implements OnInit{

  diplomeName!: string;
  diplomeData$!: Observable <Diplome[]>

  constructor( private route: ActivatedRoute,
              private http: HttpClient) {}

  ngOnInit(){
    this.diplomeName = this.route.snapshot.queryParams['degree'];
    this.diplomeData$ = this.getSerchResult(this.diplomeName);
  }

  getSerchResult(diplome: string): Observable<Diplome[]> {
    const url = `${environment.apiUrl}/api/diplomeData`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append('diplome', diplome);
    return this.http.get<Diplome[]>(url, {params: queryParams})
  }
}
