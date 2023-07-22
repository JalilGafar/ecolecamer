import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-bac-pro',
  templateUrl: './info-bac-pro.component.html',
  styleUrls: ['./info-bac-pro.component.scss', '../../informations-style.module.scss']
})
export class InfoBacProComponent implements OnInit{
  
  titre = "Bac Technique | Bac Pro";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-kampus-productiont.jpg";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title) {this.titleService.setTitle("Le bac technique au Cameroun | Camerdiplome");}


  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('bac_pro')

  }
}

