import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-bachelor',
  templateUrl: './info-bachelor.component.html',
  styleUrls: ['./info-bachelor.component.scss'  ]
})
export class InfoBachelorComponent implements OnInit{
  
  titre = "Find your Bachelor's degree";
  soustitre = "Like Jules, 40% of high school graduates use Camerdiplome to find their school";
  photo = "./../../../../assets/images/pexels-kampus-productiont.webp";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title) {this.titleService.setTitle("Le bac technique au Cameroun | Camerdiplome");}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('bachelor')

  }
}

