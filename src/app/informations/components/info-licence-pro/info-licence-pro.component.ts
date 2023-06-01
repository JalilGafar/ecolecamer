import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';

@Component({
  selector: 'app-info-licence-pro',
  templateUrl: './info-licence-pro.component.html',
  styleUrls: ['./info-licence-pro.component.scss']
})
export class InfoLicenceProComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices) {}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('licence_pro')

  }

}

