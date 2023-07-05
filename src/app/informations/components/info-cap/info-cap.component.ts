import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-cap',
  templateUrl: './info-cap.component.html',
  styleUrls: ['./info-cap.component.scss']
})
export class InfoCapComponent implements OnInit{
  
  titre = "Orientez vous vers un CAP";
  soustitre = "Comme Ngono, elles sont nombreuse à utiliser Camerdiplome pour trouver une formation";
  photo = "./../../../../assets/images/pexels-3.jpg";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title) {this.titleService.setTitle("Liste CAP | Camerdiplome");}


  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('cap')

  }

}

