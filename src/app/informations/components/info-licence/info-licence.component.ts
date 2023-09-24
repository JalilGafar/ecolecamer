import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-licence',
  templateUrl: './info-licence.component.html',
  styleUrls: ['./info-licence.component.scss', '../../informations-style.module.scss']
})
export class InfoLicenceComponent implements OnInit{
  
  titre = "Trouvez votre licence";
  soustitre = "Comme Choupo, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-rdne-stock-project.jpg";
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title,
              private meta : Meta) {this.titleService.setTitle("La Licence au Cameroun  | Camerdiplome");
                                      this.meta.addTags([ 
                                        { name: 'description', content: 'Le Cycle licence est une formation qui peut s\'intégrer directement après l\'obtention d\'un baccalauréat. ' }, 
                                        { name: 'keywords', content: 'DUT, BTS IUT, Licence, formation, LMD ' } 
                                      ]);
                                    }

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('licence')

  }

}

