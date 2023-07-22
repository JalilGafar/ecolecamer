import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

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
              private titleService:Title) {this.titleService.setTitle("La Licence au Cameroun  | Camerdiplome");}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('licence')

  }

}

