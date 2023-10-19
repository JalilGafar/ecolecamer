import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-master',
  templateUrl: './info-master.component.html',
  styleUrls: ['./info-master.component.scss'  ]
})
export class InfoMasterComponent implements OnInit{
  
  titre = "Trouvez votre Master";
  soustitre = "Comme Stefi, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-godisable-jacob.webp";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
    private titleService:Title) {this.titleService.setTitle("Les Master au Cameroun  | Camerdiplome");}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('master')

  }

}

