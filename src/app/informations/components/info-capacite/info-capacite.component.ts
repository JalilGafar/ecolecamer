import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { InfoServices } from '../../information.services';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-capacite',
  templateUrl: './info-capacite.component.html',
  styleUrls: ['./info-capacite.component.scss'  ]
})
export class InfoCapaciteComponent implements OnInit {

  titre = "Trouvez votre formation";
  soustitre = "Comme Stefi, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-godisable-jacob.webp";

  school$!: Observable<interestelt[]>

  constructor(private infoservice :InfoServices,
              private titleService:Title,
              private meta : Meta) {  this.titleService.setTitle("Capacité en Droit et Économie au Cameroun | Camerdiplome ");
                                      this.meta.addTags([ 
                                        { name: 'description', content: 'La capacité en droit et Économie offre une formation universitaire juridique générale à tous publics avec pour condition d\'être titulaire du BEPC, CAP ou tout autre diplôme équivalent, et être âgé d’au moins 21 ans révolus' }, 
                                        { name: 'keywords', content: 'métier, metier, droit, économie, juridique, facultés, emploie, Certificat, formation, Bac, Professionnel, Professionnelle' } 
                                      ]);                         
                                    }

ngOnInit(): void {
  this.school$ = this.infoservice.getFirstInterestSchool('capacité')
}
  
}
