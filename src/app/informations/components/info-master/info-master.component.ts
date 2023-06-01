import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';

@Component({
  selector: 'app-info-master',
  templateUrl: './info-master.component.html',
  styleUrls: ['./info-master.component.scss']
})
export class InfoMasterComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices) {}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('master')

  }

}

