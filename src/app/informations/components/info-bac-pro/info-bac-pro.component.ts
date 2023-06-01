import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';

@Component({
  selector: 'app-info-bac-pro',
  templateUrl: './info-bac-pro.component.html',
  styleUrls: ['./info-bac-pro.component.scss']
})
export class InfoBacProComponent implements OnInit{
  
  titre = "Bac Pro";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices) {}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('bac_pro')

  }
}

