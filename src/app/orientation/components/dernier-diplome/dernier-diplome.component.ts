import { Component } from '@angular/core';
import { OrientationService } from '../../services/orientation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dernier-diplome',
  templateUrl: './dernier-diplome.component.html',
  styleUrls: ['./dernier-diplome.component.scss']
})
export class DernierDiplomeComponent {

  constructor( private orientationService: OrientationService,
    private appRout : Router,) {}

niveau = [
  'BEPC ou équivalent',
  'Probatoir ou équivalent',
'Bac ou équivalent',
'Bac+1',
'Bac+2',
'Bac+3',
'Bac+4',
'Bac+5',
'Bac+6 et plus'
];

setNiveau(niveau: string) {
  this.orientationService.saveClasse(niveau);
  this.appRout.navigate( ['orientation/contact/'] );
}


}
