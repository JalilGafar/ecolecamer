import { AfterViewInit, Component, OnInit } from '@angular/core';
import { OrientationService } from '../../services/orientation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TopNewsService } from 'src/app/services/top-news.service';
import { BEHAVIOR } from 'src/app/core/model/Behavior';

@Component({
  selector: 'app-statuts',
  templateUrl: './statuts.component.html',
  styleUrls: ['./statuts.component.scss'   ]
})
export class StatutsComponent implements OnInit, AfterViewInit {

  constructor (private orientationService :OrientationService,
    private appRout : Router,
    private topNewsService: TopNewsService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.topNewsService.scrollTo('header', BEHAVIOR.auto)
  }


  SelectStatuts(statut : string) {
    let degree = this.route.snapshot.queryParams['degree'];
    let field = this.route.snapshot.queryParams['field'];
    let cyti = this.route.snapshot.queryParams['cyti'];
    let branche = this.route.snapshot.queryParams['branche'];
    this.orientationService.saveStatut(degree, field, branche, cyti, statut)
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
