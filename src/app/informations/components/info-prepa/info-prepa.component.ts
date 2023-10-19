import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-prepa',
  templateUrl: './info-prepa.component.html',
  styleUrls: ['./info-prepa.component.scss'  ]
})
export class InfoPrepaComponent implements OnInit{
  
  titre = "Prépa";
  soustitre = "Comme Dobo, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-cottonbro-studi.webp";

  
  school$!: Observable<interestelt[]>

  constructor(private infoservice :InfoServices,
              private titleService:Title,
              private meta: Meta) { this.titleService.setTitle("Les Meilleurs Prépa au Cameroun | Camerdiplome");
                                    this.meta.addTags([ 
                                      { name: 'description', content: 'Vous souhaitez facilement intégrer une grande école au Cameroun ou à l\'étranger ? Alors, le passage par une prépa est le moyen le plus sûr d\'atteindre votre objectif.' }, 
                                      { name: 'keywords', content: 'métier, metier, école, concours, grande école, emploie, Certificat, formation, Bac, Professionnel, Professionnelle' } 
                                    ]); 
                                  }

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('prepa')

  }

}

