import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';

@Component({
  selector: 'app-info-cap',
  templateUrl: './info-cap.component.html',
  styleUrls: ['./info-cap.component.scss']
})
export class InfoCapComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices) {}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('cap')

  }

}

