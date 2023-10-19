import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-ecole',
  templateUrl: './info-ecole.component.html',
  styleUrls: ['./info-ecole.component.scss'  ]
})
export class InfoEcoleComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Toumbe, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-cottonbro-studi.webp";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
               private titleService:Title) {this.titleService.setTitle("Les Prépa concours au Cameroun | Camerdiplome");}


  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('ecole')

  }

}

