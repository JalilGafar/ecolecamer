import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-licence-pro',
  templateUrl: './info-licence-pro.component.html',
  styleUrls: ['./info-licence-pro.component.scss'  ]
})
export class InfoLicenceProComponent implements OnInit{
  
  titre = "Trouvez votre Licence Pro";
  soustitre = "Comme Choupo, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-rdne-stock-project.webp";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
    private titleService:Title) {this.titleService.setTitle("La Licence Pro au Cameroun  | Camerdiplome");}

ngOnInit(): void {

this.school$ = this.infoservice.getFirstInterestSchool('licence')

}

}

