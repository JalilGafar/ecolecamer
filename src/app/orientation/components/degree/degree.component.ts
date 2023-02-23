import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
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
    const userDegreeCyti = this.route.snapshot.queryParams['degreeCyti'];
    /*si une ville a deja été selectionné, on n'affiche que les diplomes de cette ville*/
    if (userDegreeCyti) {
      this.getDegreeCyti(userDegreeCyti);

    } else if (userDegreeCyti === undefined ) {
      this.getDegreeCyti('tous');
    }
    console.log(userDegreeCyti);
  }

  setDegree(degree : string){
    this.orientationService.saveDegree(degree);
    this.appRout.navigate(
      ['orientation/domaines/'],
      {queryParams: {degree:degree} }
    );
  }
    
  getDegreeCyti (degreeCyti: string) {
    this.degree$ = this.orientationService.getDegreeCyti(degreeCyti);
    this.orientationService.getDegreeCyti(degreeCyti).subscribe(data => {
      this.degreeView = data;
      console.log (this.degreeView)
    })
  }

}
