import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { degree } from 'src/app/core/model/degree-model';
import { OrientationService } from '../../services/orientation.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent {

  degree$!: Observable<degree[]>;
  degreeView!: degree [];
  cap = {groupe: 'CAP ou équivalent'};
  bts = {groupe: 'Bac+1 à Bac+2'};
  licence = {groupe: 'Bac+3'};
  master = {groupe: 'Bac+4 à Bac+5'};
  doctor = {groupe: 'Bac+6 et plus'};
  autre = {groupe: 'Autre'};

  constructor (private orientationService :OrientationService,
              private appRout : Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    const cyti = this.route.snapshot.queryParams['cyti'];
    const field = this.route.snapshot.queryParams['field'];
    /*si une ville a deja été selectionné, on n'affiche que les diplomes de cette ville*/
    if (cyti) {
      this.getDegreeCyti(cyti);
    } else if (field) {
      this.degree$ = this.orientationService.getDegreeField(field);
    } else if (cyti === undefined && field === undefined) {
      //this.getDegreeCyti('tous');
      this.degree$ = this.orientationService.getDegreeCyti('tous');
    }
  }

  setDegree(degree : string){
    let cyti = this.route.snapshot.queryParams['cyti'];
    let field = this.route.snapshot.queryParams['field'];
    //***Si field et cyti ne sont pas défini, on passe a la page "domaine" */
    if ( field === undefined && cyti === undefined) {
      this.appRout.navigate(
        ['orientation/domaines/'],
        {queryParams:  {degree:degree} }
      );
    } else if (cyti !== undefined) {
      //**Si cyti seulement est défini, on le met en queryParams et on passe a la page "domaine" */
      this.appRout.navigate(
        ['orientation/domaines/'],
        {queryParams:  {degree:degree, cyti:cyti} }
      );
    } else if (field !== undefined) {
      //** Si field est défini, on le met en queryParams et on passe à la page "city" */
      this.appRout.navigate(
        ['orientation/city/'],
        {queryParams: {degree:degree, field:field} }
      );
    }
  }
    
  getDegreeCyti (degreeCyti: string) {
    this.degree$ = this.orientationService.getDegreeCyti(degreeCyti);

  }

}
