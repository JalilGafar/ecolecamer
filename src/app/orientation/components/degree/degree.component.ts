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
  bts = {groupe: 'Bac+1 à Bac+2'}

  constructor (private orientationService :OrientationService,
              private appRout : Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    const userDegreeCyti = this.route.snapshot.params['degreeCyti'];
    /*si une ville a deja été selectionné, on n'affiche que les diplomes de cette ville*/
    if (userDegreeCyti) {
      this.getDegreeByCyti(userDegreeCyti);
    } else {
      this.getAllDegree();
    }
    console.log(userDegreeCyti);
  }

  setDegree(degree : string){
    this.orientationService.saveDegree(degree)
  }
    
  getDegreeByCyti (degreeCyti: string) {
    this.orientationService.getDegreeByCyti(degreeCyti)
  }

  getAllDegree () {
    this.degree$ = this.orientationService.geAllDegree();
    this.orientationService.geAllDegree().subscribe(data => {
      this.degreeView = data;
      console.log (this.degreeView)
    })
    
   // console.log(this.degree$)
  }

}
