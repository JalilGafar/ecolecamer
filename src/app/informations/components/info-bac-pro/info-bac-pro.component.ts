import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Meta, Title } from '@angular/platform-browser';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-info-bac-pro',
  templateUrl: './info-bac-pro.component.html',
  styleUrls: ['./info-bac-pro.component.scss', '../../informations-style.module.scss']
})
export class InfoBacProComponent implements OnInit{
  
  titre = "Bac Technique | Bac Pro";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-kampus-productiont.jpg";
  
  school$!: Observable<interestelt[]>;
  overlayVisible: boolean = false;

  constructor( private infoservice :InfoServices,  
              private titleService:Title,
              private meta : Meta) {  this.titleService.setTitle("Le Bac technique et Professionnelle au Cameroun | Camerdiplome");
                                      this.meta.addTags([ 
                                        { name: 'description', content: 'Avec près de 50 séries/spécialités, les Bac professionnels et techniques sont des diplômes donnant directement accès au marché du travail' }, 
                                        { name: 'keywords', content: 'métier, metier, emploie, formation, Bac, Professionnel, Professionnelle, Technique' } 
                                      ]);
                                    }

  data: TreeNode[] = [
    {
        label: 'Après le CAP / BEPC*',
        expanded: true,
        children: [
            {
                label: '1e année BP ou BEP',
                expanded: true,
                children: [
                  {
                    label: '2e année BP ou BEP',
                    expanded: true,
                    children: [
                      {
                        expanded: true,
                                type: 'person',
                                data : {
                                  label: 'BEP'
                                }
                      },  
                      {
                        label: '3e année BP',
                        expanded: true,
                        children: [
                          {
                            expanded: true,
                                    type: 'person',
                                    data : {
                                      label: 'BP'
                                    }
                          }
                        ]
                      }
                                                          
                    ]
                  }
                ]
            },
            {
                label: '2nd Technique',
                expanded: true,
                children: [
                  {
                    label: '1e Technique',
                    expanded: true,
                    children: [
                      {
                        label: '2e année',
                        expanded: true,
                        children: [
                          {
                            type: 'person',
                            data : {
                              label: 'PROBATOIRES'
                            },
                            expanded: true,
                            children: [
                              {
                                label: 'Tle Technique',
                                expanded: true,
                                children: [
                                  {
                                    expanded: true,
                                    type: 'person',
                                    data : {
                                      label: 'BAC F ou BT'
                                    }
                                    
                                  } 
                                ]
                              } 
                            ]
                          } 
                        ]
                      }                                     
                    ]
                  }
                ]
            }
        ]
    }
  ];

  Elec = [
    {
      spe :   'CI' ,
      deno : 'Chimie Industrielle'
    },
    {
      spe :   'F2' ,
      deno : 'Electronique'
    },
    {
      spe :   'F3' ,
      deno : 'Electrotechnique'
    },
    {
      spe :   'F5' ,
      deno : 'Froid et Climatisation'
    },
    {
      spe :   'F7' ,
      deno : 'Sciences et Techniques Biologiques et Médico-Sanitaires'
    },
    {
      spe :   'F8' ,
      deno : 'Sciences et Technologies de la Santé et du Social'
    },
    {
      spe :   'MHB' ,
      deno : 'Maintenance Hospitalière'
    },
    {
      spe :   'MISE' ,
      deno : 'Maintenance et Installation des Systèmes Electroniques'
    }
  ];

  GenieM =  [
    {
      spe: 'BIJO',
      deno: 'Bijouterie-Joaillerie'
    },
    {
      spe: 'E',
      deno: 'Mathématiques et Techniques'
    },
    {
      spe: 'F1',
      deno: 'Fabrication Mécanique'
    },
    {
      spe: 'MAIN',
      deno: 'Mécanique Automobile Injection'
    },
    {
      spe: 'MA',
      deno: 'Mécanique Automobile'
    },
    {
      spe: 'MEM',
      deno: 'Maintenance Electromécanique'
    },
    {
      spe: 'MEFA',
      deno: 'Mécanique de fabrication'
    },
    {
      spe: 'MEFE',
      deno: 'Métaux en Feuille'
    },
    {
      spe: 'MF/CM',
      deno: 'Métaux en Feuille / Construction Métalique'
    }
  ];

  GenieC =  [
    {
      spe: 'AG-PA',
      deno: 'Agriculture option Production Animale'
    },
    {
      spe: 'AG-PV',
      deno: 'Agriculture option Production Végétale'
    },
    {
      spe: 'AG-TP',
      deno: 'Agriculture option Transformation des Produits'
    },
    {
      spe: 'EF',
      deno: 'Exploitation Forestière'
    },
    {
      spe: 'F4-BA',
      deno: 'Génie Civil option Bâtiment'
    },
    {
      spe: 'F4-BE',
      deno: 'Génie Civil option Bureau d\'Etude'
    },
    {
      spe: 'F4-TP',
      deno: 'Génie Civil option Traveaux Publics'
    },
    {
      spe: 'GT-TO',
      deno: 'Géomètre-Topographe option Photogrammétrie'
    },
    {
      spe: 'GT-TO',
      deno: 'Géomètre-Topographe option Topographie'
    },
    {
      spe: 'IB',
      deno: 'Industrie du Bois'
    },
    {
      spe: 'IS',
      deno: 'Installation Sanitaire'
    },
    {
      spe: 'MEB',
      deno: 'Menuiserie Ebénisterie'
    }
  ];

  Mode = [
    {
      spe: 'AF1',
      deno: 'Artistique option Céramique'
    },
    {
      spe: 'AF2',
      deno: 'Artistique option Peinture'
    },
    {
      spe: 'AF3',
      deno: 'Artistique option Sculpture'
    },
    {
      spe: 'IH',
      deno: 'Industrie de l\'Habillement'
    }
  ];

  Bep = [
    {
      spe: 'ELAD',
      deno: 'Electricité Automobile Diesel'
    },
    {
      spe: 'COBA',
      deno: 'Construction Bâtiment'
    },
    {
      spe: 'INSA',
      deno: 'Installation Sanitaire'
    },
    {
      spe: 'ELNI',
      deno: 'Electronique'
    },
    {
      spe: 'SECR',
      deno: 'Secrétariat'
    },
    {
      spe: 'CPT',
      deno: 'Comptabilité'
    },
    {
      spe: 'BQ',
      deno: 'Banque'
    },
  ];

  Bp = [
    {
      spe: 'MUSE',
      deno: 'Mécanique d\'Usinage'
    },
    {
      spe: 'MEAU',
      deno: 'Mécanique Auto'
    },
    {
      spe: 'INSA',
      deno: 'Installation Sanitaire'
    },
    {
      spe: 'CHME',
      deno: 'Chaudronnerie - Métallerie'
    },
    {
      spe: 'ELAO',
      deno: 'Electricité Automobile'
    },
    {
      spe: 'MACO',
      deno: 'Maçonnerie'
    },
    {
      spe: 'MENU',
      deno: 'Menuiserie'
    },
    {
      spe: 'COUT',
      deno: 'Couture'
    },
    {
      spe: 'ELPRO',
      deno: 'Electrotechnique option Production'
    },
    {
      spe: 'ELDI',
      deno: 'Electrotechnique option Distribution'
    },
    {
      spe: 'ELET',
      deno: 'Electrotechnique option Equipement de Transport'
    },
    {
      spe: 'FRCL',
      deno: 'Froid et Climatisation'
    },
    {
      spe: 'SECR',
      deno: 'Secrétariat'
    },
    {
      spe: 'CPT',
      deno: 'Comptabilité'
    },
    {
      spe: 'BQ',
      deno: 'Banque'
    },
  ]

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('bac_pro')

  };

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  };
}

