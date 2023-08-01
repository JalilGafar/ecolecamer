import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InfoServices } from '../../information.services';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-capacite',
  templateUrl: './info-capacite.component.html',
  styleUrls: ['./info-capacite.component.scss']
})
export class InfoCapaciteComponent implements OnInit {

  titre = "Trouvez votre formation";
  soustitre = "Comme Stefi, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/pexels-godisable-jacob.jpg";

  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
    private titleService:Title) {this.titleService.setTitle("Capacité en Droit au Cameroun | Camerdiplome ");}

ngOnInit(): void {
  this.school$ = this.infoservice.getFirstInterestSchool('capacité')
}
  
}
