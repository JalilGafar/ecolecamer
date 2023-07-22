import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-bts',
  templateUrl: './info-bts.component.html',
  styleUrls: ['./info-bts.component.scss', '../../informations-style.module.scss']
})
export class InfoBtsComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Stefi, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-godisable-jacob.jpg";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title) {this.titleService.setTitle("Les BTS au Cameroun | Camerdiplome ");}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('bts')

  }
}

