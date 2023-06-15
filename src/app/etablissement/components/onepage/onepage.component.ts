import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SchoolData } from 'src/app/core/model/school-model';
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-onepage',
  templateUrl: './onepage.component.html',
  styleUrls: ['./onepage.component.scss']
})
export class OnepageComponent implements OnInit{

  schoolName!: string;
  schoolData$!: Observable<SchoolData[]>;
  schoolData!: SchoolData;

  constructor( private route: ActivatedRoute,
                private http: HttpClient) {}

  ngOnInit(): void {
    this.schoolName = this.route.snapshot.queryParams['school'];
    this.schoolData$ = this.getSerchResult(this.schoolName);
    this.schoolData$.subscribe(res => console.log(res))

  }


  getSerchResult(school: string): Observable<SchoolData[]> {
    const url = `${environment.apiUrl}/api/shoolData`;
    let queryParams = new HttpParams();
    queryParams = queryParams.append('school', school);
    return this.http.get<SchoolData[]>(url, {params: queryParams})
  }


}
