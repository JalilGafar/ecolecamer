import { Component, Input } from '@angular/core';
import { Observable, map } from 'rxjs';
import { OrientationService } from 'src/app/orientation/services/orientation.service';
import { ville } from 'src/app/core/model/ville-model';
import { ActivatedRoute, Router } from '@angular/router';
import { field } from 'src/app/core/model/field-model';
import { degree } from 'src/app/core/model/degree-model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  @Input() cyties$!: Observable<ville[]>;

  constructor (private orientationService :OrientationService,
                private appRout : Router,
                private route: ActivatedRoute) {}

  ngOnInit():void {
    let degree = this.route.snapshot.queryParams['degree'];
    let field = this.route.snapshot.queryParams['field'];
    if (field  && degree) {
      console.log('normalement')
      this.cyties$ = this.orientationService.getPartCyties( degree, field);
    } else {
      /*Envoyer une requete de toutes les villes ayant un campus*/
      this.cyties$ = this.orientationService.getAllCyties();
    }
  }

  setCyti (cyti : string) {
    let degree = this.route.snapshot.queryParams['degree'];
    let field = this.route.snapshot.queryParams['field'];
    if (degree && field ) {
      this.appRout.navigate(
        ['orientation/statuts/'],
        {queryParams: {degree:degree, field:field, cyti:cyti} }
      );
    } else {
      this.appRout.navigate(
        ['orientation/degree/'],
        {queryParams: {cyti:cyti} }
      );
    }
  }


}
