import { Component, OnInit } from '@angular/core';
import { OrientationService } from '../../services/orientation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-statuts',
  templateUrl: './statuts.component.html',
  styleUrls: ['./statuts.component.scss']
})
export class StatutsComponent implements OnInit {

  constructor (private orientationService :OrientationService,
    private appRout : Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    
  }

  SelectStatuts(statut : string) {
    this.orientationService.saveStatut(statut)
    switch (statut) {
      case 'lycéen':
        this.appRout.navigate( ['orientation/classe/'] );        
        break;
      case 'étudiant':
        this.appRout.navigate( ['orientation/etudiant/'] );        
        break;    
      default:
        this.appRout.navigate( ['orientation/dernierDiplome/'] ); 
        break;
    }
    
  }

}
