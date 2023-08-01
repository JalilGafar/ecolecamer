import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { degree } from 'src/app/core/model/degree-model';
import { OrientationService } from '../../services/orientation.service';
import { Title } from '@angular/platform-browser';
import { BEHAVIOR } from 'src/app/core/model/Behavior';
import { TopNewsService } from 'src/app/services/top-news.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss', '../../orientation-style.module.scss']
})
export class DegreeComponent implements OnInit, AfterViewInit {

  degree$!: Observable<degree[]>;
  degreeView!: degree [];
  loading$!: Observable<boolean>;
  cap = {groupe: 'CAP ou équivalent'};
  bac = {groupe: 'Bac ou équivalent'};
  bts = {groupe: 'Bac+1 à Bac+2'};
  licence = {groupe: 'Bac+3'};
  master = {groupe: 'Bac+4 à Bac+5'};
  doctor = {groupe: 'Bac+6 et plus'};
  autre = {groupe: 'Autre'};

  capLenght!: number
  btsLenght!: number
  liLenght!: number
  masLenght!: number
  docLenght!: number
  autLenght!: number

  constructor (private orientationService :OrientationService,
              private appRout : Router,
              private route: ActivatedRoute,
              private topNewsService: TopNewsService,
              private titleService:Title) {this.titleService.setTitle("quel diplome pour ma formation au Cameroun");}

  ngOnInit(){
    const cyti = this.route.snapshot.queryParams['cyti'];
    const field = this.route.snapshot.queryParams['field'];
    /*si une ville a deja été selectionné, on n'affiche que les diplomes de cette ville*/
    if (cyti) {
      this.getDegreeCyti(cyti);
    } else if (field) {
      this.orientationService.getDegreeField(field).subscribe(
        data => {
          this.degreeView = data
          this.capLenght = this.degreeView.filter(x => x.groupe == this.cap.groupe).length
          this.btsLenght = this.degreeView.filter(x => x.groupe == this.bts.groupe).length
          this.liLenght = this.degreeView.filter(x => x.groupe == this.licence.groupe).length
          this.masLenght = this.degreeView.filter(x => x.groupe == this.master.groupe).length
          this.docLenght = this.degreeView.filter(x => x.groupe == this.doctor.groupe).length
          this.autLenght = this.degreeView.filter(x => x.groupe == this.autre.groupe).length
        }
      );
    } else if (cyti === undefined && field === undefined) {
      //this.getDegreeCyti('tous');
      this.orientationService.getDegreeCyti('tous').subscribe(
        data => {
          this.degreeView = data
        }
      );
    }
  }

  ngAfterViewInit(): void {
    this.topNewsService.scrollTo('header', BEHAVIOR.auto)
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

  setNiveau(){
    
  }
    
  getDegreeCyti (degreeCyti: string) {
    this.orientationService.getDegreeCyti(degreeCyti).subscribe(
      data => {
        this.degreeView = data;
        this.capLenght = this.degreeView.filter(x => x.groupe == this.cap.groupe).length
        this.btsLenght = this.degreeView.filter(x => x.groupe == this.bts.groupe).length
        this.liLenght = this.degreeView.filter(x => x.groupe == this.licence.groupe).length
        this.masLenght = this.degreeView.filter(x => x.groupe == this.master.groupe).length
        this.docLenght = this.degreeView.filter(x => x.groupe == this.doctor.groupe).length
        this.autLenght = this.degreeView.filter(x => x.groupe == this.autre.groupe).length

      }
    );;

  }

}
