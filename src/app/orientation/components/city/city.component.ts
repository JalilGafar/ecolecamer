import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OrientationService } from 'src/app/orientation/services/orientation.service';
import { ville } from 'src/app/core/model/ville-model';
import { ActivatedRoute, Router } from '@angular/router';

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
    const userDegree = this.orientationService.initialUser.degree ;
    const userDomaine = this.orientationService.initialUser.field ;
    console.log(this.orientationService.initialUser)
    if (userDomaine !== '' && userDegree !== '' ) {
      this.cyties$ = this.orientationService.getPartCyties( userDegree, userDomaine);
    } else {
      /*Envoyer une requete de toutes les villes ayant un campus*/
      this.cyties$ = this.orientationService.getAllCyties();
    }
  }

  setCyti (val : string) {
    this.orientationService.saveCytiIn(val);
    if (this.orientationService.initialUser.degree !== '') {
      this.appRout.navigate(
        ['orientation/statuts/'],
        //{queryParams: {degreeCyti:val} }
      );
    } else {
      this.appRout.navigate(
        ['orientation/degree/'],
        {queryParams: {cyti:val} }
      );
    }
  }


}
