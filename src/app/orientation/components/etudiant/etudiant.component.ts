import { Component } from '@angular/core';
import { OrientationService } from '../../services/orientation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.scss'   ]
})
export class EtudiantComponent {

  constructor( private orientationService: OrientationService,
              private appRout : Router,) {}

  niveau = [
    'Bac ou équivalent',
    'Bac+1',
    'Bac+2',
    'Bac+3',
    'Bac+4',
    'Bac+5',
    'Bac+6 et plus'
  ];

  setNiveau(niveau: string) {
    this.orientationService.saveClasse(niveau)
    this.appRout.navigate( ['orientation/contact/'] );
  }

}
