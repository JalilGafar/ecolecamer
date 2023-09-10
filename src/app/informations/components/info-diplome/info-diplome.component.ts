import { Component, OnInit } from '@angular/core';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Observable } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-info-diplome',
  templateUrl: './info-diplome.component.html',
  styleUrls: ['./info-diplome.component.scss', '../../informations-style.module.scss']
})
export class InfoDiplomeComponent implements OnInit{
  
  titre = "Trouvez votre formation au Cameroun";
  soustitre = "Comme Fadimatou, elles sont nombreuse à utiliser Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/fati_lon_mini.jpg";
  school$!: Observable <interestelt[]>;

  constructor( private infoservice : InfoServices,
              private responsive: BreakpointObserver,
              private titleService:Title, 
              private meta: Meta) {this.titleService.setTitle("Liste des Diplômes au Cameroun");
                                    this.meta.addTags([ 
                                      { name: 'description', content: 'CAP, Bac, DQP, CQP, Master, BTS, Licence, Bachelor, HND, Licence pro, Prepa, Capacité' }, 
                                      { name: 'keywords', content: 'CAP, Bac, DQP, CQP, Master, BTS, Licence, Bachelor, HND, Licence pro, Prepa, Capacité' } 
                                    ]);
                                  }


  products = [
    {
     niveau :   '1er cycle' ,
     duree : '4 ans',
     diplome: 'BEPC'
    },
    {
     niveau :   '2nd cycle' ,
     duree : '2 ans',
     diplome: 'Probatoire'
    },
    {
     niveau :   '2nd cycle' ,
     duree : '1 an',
     diplome: 'Baccalauréat'
    }
  ];
  productTec = [
    {
     niveau :   '1er cycle' ,
     duree : '4 ans',
     diplome: 'CAP'
    },
    {
     niveau :   '2nd cycle' ,
     duree : '2 ans',
     diplome: 'Probatoire Technique / Le Probatoire de Brévet de Technicien'
    },
    {
     niveau :   '2nd cycle' ,
     duree : '1 an',
     diplome: 'Baccalauréat Technique  / le Brevet de Technicien (BT)'
    }
  ];
  productTecEn = [
    {
     niveau :   '1st cycle' ,
     duree : '4 years',
     diplome: 'Technical and Vocational Education Examination Intermediate Level'
    },
    {
     niveau :   '2nd cycle' ,
     duree : '3 years',
     diplome: 'Technical and Vocational Education Examination Advanced Level'
    }
  ];

  productsEn = [
    {
     niveau :   '1st cycle' ,
     duree : '5 years',
     diplome: 'General Certificate of Education Ordinary Level'
    },
    {
     niveau :   '2nd cycle' ,
     duree : '2 years',
     diplome: 'General Certificate of Education Advanced Level'
    }
  ];

  filiere = [
    {
      serie : 'A',
      description : 'A1 (Lettres, Latin et Grec)'
    },
    {
      serie : 'A',
      description : 'A2 (Lettres, Latin et Langue Vivante II)'
    },
    {
      serie : 'A',
      description : 'A3 (Lettres et Latin)'
    },
    {
      serie : 'D',
      description : 'Science de la terre et Mathématique'
    },
    {
      serie : 'C',
      description : 'Mathématique et Physique'
    },
    {
      serie : 'TI',
      description : 'Technologie de l\'information'
    },
    {
      serie : 'BIL',
      description : 'Bilingue (Fancais-Anglais et English-French)'
    }
  ];
  

  filiereEn = [
    {
      serie : 'ARTS',
      description : 'A1 (French, Literature and History)'
    },
    {
      serie : 'ARTS',
      description : 'A2 (Geography, Economics and History)'
    },
    {
      serie : 'ARTS',
      description : 'A3 (Literature, History and Economics)'
    },
    {
      serie : 'ARTS',
      description : 'A4 (Geography, Economics and Mathematics)'
    },
    {
      serie : 'ARTS',
      description : 'A5 (Literature, Philosophy and Mathematics)'
    },
    {
      serie : 'ARTS',
      description : 'A6 (Literature, French, and 1 Foreign Lang)'
    },
    {
      serie : 'ARTS',
      description : 'A7 (Literature, Cinematography and Computer Science)'
    },
    {
      serie : 'ARTS',
      description : 'A8 (Arts and Craft and National Language and Culture)'
    },
    {
      serie : 'SCIENCES',
      description : 'S1 (Chemestry, Physics and Maths)'
    },
    {
      serie : 'SCIENCES',
      description : 'S2 (Chemestry, Physics and Biology)'
    },
    {
      serie : 'SCIENCES',
      description : 'S3 (Biology, Chemestry and Physics)'
    },
    {
      serie : 'SCIENCES',
      description : 'S4 (Biology, Chemestry and Geology/Geography)'
    }
  ]
  
  ngOnInit(): void {


    this.school$ = this.infoservice.getFirstInterestSchool('diplome')

    

   
  }

}
