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
  }

}
