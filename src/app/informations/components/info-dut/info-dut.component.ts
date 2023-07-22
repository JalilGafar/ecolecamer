import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-dut',
  templateUrl: './info-dut.component.html',
  styleUrls: ['./info-dut.component.scss', '../../informations-style.module.scss']
})
export class InfoDutComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Fatima, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/fati_lon.jpg";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title) {this.titleService.setTitle("Les DUT au Cameroun | Camerdiplome ");}

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('dut')

  }

}

