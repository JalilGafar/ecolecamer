import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OrientationService } from 'src/app/orientation/services/orientation.service';
import { ville } from 'src/app/core/model/ville-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  @Input() cyties$!: Observable<ville[]>;

  constructor (private orientationService :OrientationService,
                private appRout : Router) {}

  ngOnInit():void {
    /*Envoyer une requete de toutes les villes ayant un campus*/
    this.cyties$ = this.orientationService.getAllCyties();
  }

  setCyti (val : string) {
    this.orientationService.saveCytiIn(val);
   // this.appRout.navigateByUrl('orientation/degree/'+val);
    this.appRout.navigate(
       ['orientation/degree/'],
       {queryParams: {degreeCyti:val} }
     );
  }


}
