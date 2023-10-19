import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrientationService } from 'src/app/orientation/services/orientation.service';
import { ville } from 'src/app/core/model/ville-model';
import { ActivatedRoute, Router } from '@angular/router';
import { field } from 'src/app/core/model/field-model';
import { degree } from 'src/app/core/model/degree-model';
import { Title } from '@angular/platform-browser';
import { BEHAVIOR } from 'src/app/core/model/Behavior';
import { TopNewsService } from 'src/app/services/top-news.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'   ]
})
export class CityComponent implements OnInit, AfterViewInit{

  @Input() cyties$!: Observable<ville[]>;

  loading$!: Observable<boolean>;

  constructor (private orientationService :OrientationService,
                private appRout : Router,
                private route: ActivatedRoute,
                private topNewsService: TopNewsService,
                private titleService:Title) {this.titleService.setTitle("Trouver bonne une école de formation au Cameroun");}

  ngOnInit():void {
    this.loading$ = this.orientationService.loading$;
    let degree = this.route.snapshot.queryParams['degree'];
    let field = this.route.snapshot.queryParams['field'];
    let branche = this.route.snapshot.queryParams['branche'];
    if (field  && degree) {
      //console.log('normalement')
      this.cyties$ = this.orientationService.getPartCyties( degree, field, branche);
    } else {
      /*Envoyer une requete de toutes les villes ayant un campus*/
      this.cyties$ = this.orientationService.getAllCyties();
    }
  }

  ngAfterViewInit(): void {
    this.topNewsService.scrollTo('header', BEHAVIOR.auto)
  }

  setNiveau(){}
  
  setCyti (cyti : string) {
    let degree = this.route.snapshot.queryParams['degree'];
    let field = this.route.snapshot.queryParams['field'];
    let branche = this.route.snapshot.queryParams['branche'];
    if (degree && field ) {
      this.appRout.navigate(
        ['orientation/statuts/'],
        {queryParams: {degree:degree, field:field, branche:branche, cyti:cyti} }
      );
    } else {
      this.appRout.navigate(
        ['orientation/degree/'],
        {queryParams: {cyti:cyti} }
      );
    }
  }


}
