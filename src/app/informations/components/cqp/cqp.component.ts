import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';

@Component({
  selector: 'app-cqp',
  templateUrl: './cqp.component.html',
  styleUrls: ['./cqp.component.scss']
})
export class CqpComponent implements OnInit {

  titre = "Certificat de Qualification Professionnelle (CQP)";
  soustitre = "Comme Esso, 40% des bacheliers utilisent Diplomeo pour trouver leur école";
  photo = "./../../../../assets/images/pexels-cottonbro-studi.jpg";

  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices) {}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('prepa')

  }
}
