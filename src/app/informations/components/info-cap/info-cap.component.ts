import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Meta, Title } from '@angular/platform-browser';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-info-cap',
  templateUrl: './info-cap.component.html',
  styleUrls: ['./info-cap.component.scss', '../../informations-style.module.scss']
})
export class InfoCapComponent implements OnInit{
  
  titre = "Orientez vous vers un CAP";
  soustitre = "Comme Ngono, elles sont nombreuse à utiliser Camerdiplome pour trouver une formation";
  photo = "./../../../../assets/images/pexels-3.jpg";
  
  school$!: Observable<interestelt[]>;
  overlayVisible: boolean = false;

  data: TreeNode[] = [
    {
        label: 'Après le CM2',
        expanded: true,
        children: [
            {
                label: 'SAR / SM',
                expanded: true,
                children: [
                  {
                    label: '1ère année',
                    expanded: true,
                    children: [
                      {
                        label: '2e année',
                        expanded: true,
                        children: [
                          {
                            expanded: true,
                                    type: 'person',
                                    data : {
                                      label: 'ATTESTATION'
                                    }
                          } 
                        ]
                      }                                     
                    ]
                  }
                ]
            },
            {
                label: 'CETIC / CETIF',
                expanded: true,
                children: [
                  {
                    label: '1ère année',
                    expanded: true,
                    children: [
                      {
                        label: '2e année',
                        expanded: true,
                        children: [
                          {
                            label: '3e année',
                            expanded: true,
                            children: [
                              {
                                label: '4e année',
                                expanded: true,
                                children: [
                                  {
                                    expanded: true,
                                    type: 'person',
                                    data : {
                                      label: 'CAP'
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

  constructor( private infoservice :InfoServices,
              private meta: Meta,
              private titleService:Title) {this.titleService.setTitle("Le Certificat d'Aptitude Professionnel (CAP) au Cameroun | Camerdiplome");
                                            this.meta.addTags([ 
                                              { name: 'description', content: 'Optez pour une formation professionnelle avant le Bac dans l\'une des nombreuses spécialités du CAP' }, 
                                              { name: 'keywords', content: 'CAP, métier, metier, emploie, formation, Bac' } 
                                            ]);
                                          }


  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('cap')

  }

  toggle() {
    this.overlayVisible = !this.overlayVisible;
  };

}

