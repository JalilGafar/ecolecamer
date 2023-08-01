import { Component, OnInit } from '@angular/core';
import { OrientationService } from '../../services/orientation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-classe',
  templateUrl: './classe.component.html',
  styleUrls: ['./classe.component.scss', '../../orientation-style.module.scss']
})
export class ClasseComponent implements OnInit{

  classe = ['Terminale', 'Première', 'Seconde', '3e', '4e', '5e', '6e'];

  constructor (private orientationService :OrientationService,
    private appRout : Router,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    
  }

  setClasse(classe: string) {
    this.orientationService.saveClasse(classe);
    this.appRout.navigate( ['orientation/contact/'] );
  }

}
