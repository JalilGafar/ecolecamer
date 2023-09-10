import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cqp',
  templateUrl: './cqp.component.html',
  styleUrls: ['./cqp.component.scss', '../../informations-style.module.scss']
})
export class CqpComponent implements OnInit {

  titre = "Certificat de Qualification Professionnelle (CQP)";
  soustitre = "Comme Esso, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-cottonbro-studi.jpg";

  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title,
              private meta: Meta) { this.titleService.setTitle("Le Certificat de Qualification Professionnelle (CQP) au Cameroun | Camerdiplome");
                                    this.meta.addTags([ 
                                      { name: 'description', content: 'Le Certificat de Qualification Professionnelle (CQP)est une certification créée et délivrée par une branche professionnelle, via la Commission Paritaire Nationale de l’Emploi et de la Formation professionnelle.' }, 
                                      { name: 'keywords', content: 'métier, metier, emploie,Certificat, CQP, DQP, formation, Bac, Professionnel, Professionnelle, Technique' } 
                                    ]);
                                  }

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('prepa')

  }
}
