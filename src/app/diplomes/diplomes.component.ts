import { HttpClient, HttpParams } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Diplome } from '../admin/models/diplome.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TopNewsService } from '../services/top-news.service';
import { BEHAVIOR } from '../core/model/Behavior';

@Component({
  selector: 'app-diplomes',
  templateUrl: './diplomes.component.html',
  styleUrls: ['./diplomes.component.scss']
})
export class DiplomesComponent implements OnInit, AfterViewInit{

  diplomeName!: string;
  diplomeData$!: Observable <Diplome[]>

  constructor( private route: ActivatedRoute,
              private http: HttpClient,
              private topNewsService : TopNewsService) {}

  ngOnInit(){
    this.diplomeName = this.route.snapshot.queryParams['degree'];
    this.diplomeData$ = this.getSerchResult(this.diplomeName);
  }

  ngAfterViewInit(): void {
    this.topNewsService.scrollTo('header', BEHAVIOR.auto)
  }

  getSerchResult(diplome: string): Observable<Diplome[]> {
    const url = `${environment.apiUrl}/api/diplomeData`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append('diplome', diplome);
    return this.http.get<Diplome[]>(url, {params: queryParams})
  }
}
