import { Component, OnInit } from '@angular/core';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-info-diplome',
  templateUrl: './info-diplome.component.html',
  styleUrls: ['./info-diplome.component.scss']
})
export class InfoDiplomeComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  school$!: Observable <interestelt[]>;

  constructor( private infoservice : InfoServices){}
  
  ngOnInit(): void {


    this.school$ = this.infoservice.getFirstInterestSchool('diplome')

   
  }

}
