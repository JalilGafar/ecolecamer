import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-metier',
  templateUrl: './info-metier.component.html',
  styleUrls: ['./info-metier.component.scss', '../../informations-style.module.scss']
})
export class InfoMetierComponent implements OnInit{
  
  titre = "Un Métier qui te correspond";
  soustitre = "Comme Toumbe, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-cottonbro-studi.jpg";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
            private titleService:Title) {this.titleService.setTitle("Les Métiers d'avenir | Camerdiplome");}


  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('metier')

  }

}

