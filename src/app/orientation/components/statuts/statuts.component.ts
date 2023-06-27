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
    let degree = this.route.snapshot.queryParams['degree'];
    let field = this.route.snapshot.queryParams['field'];
    let cyti = this.route.snapshot.queryParams['cyti'];
    this.orientationService.saveStatut(degree, field, cyti, statut)
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
