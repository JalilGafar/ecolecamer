import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrientationService } from '../../services/orientation.service';

@Component({
  selector: 'app-degree',
  templateUrl: './degree.component.html',
  styleUrls: ['./degree.component.scss']
})
export class DegreeComponent {

  constructor (private orientationService :OrientationService,
              private appRout : Router,
              private route: ActivatedRoute) {}

  ngOnInit(){
    const userDegree = this.route.snapshot.params['degree'];
    console.log(userDegree);
  }

    setDegree(degree : string){
      this.orientationService.saveDegree(degree)
    }  

}
