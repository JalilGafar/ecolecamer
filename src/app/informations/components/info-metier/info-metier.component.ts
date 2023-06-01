import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';

@Component({
  selector: 'app-info-metier',
  templateUrl: './info-metier.component.html',
  styleUrls: ['./info-metier.component.scss']
})
export class InfoMetierComponent implements OnInit{
  
  titre = "Un Métier qui te correspond";
  soustitre = "Comme Jules, 40% des bacheliers utilisent Diplomeo pour trouver leur école"
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices) {}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('metier')

  }

}

