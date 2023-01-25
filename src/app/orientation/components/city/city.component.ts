import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { OrientationService } from 'src/app/services/orientation.service';
import { ville } from 'src/app/core/model/ville-model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent {

  @Input() cyties$!: Observable<ville[]>;

  constructor (private orientationService :OrientationService) {}

  ngOnInit():void {
    /*Envoyer une requete de toutes les villes ayant un campus*/
    this.cyties$ = this.orientationService.getAllCyties();
  }


}
