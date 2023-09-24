import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-info-dut',
  templateUrl: './info-dut.component.html',
  styleUrls: ['./info-dut.component.scss', '../../informations-style.module.scss']
})
export class InfoDutComponent implements OnInit{
  
  titre = "Trouvez votre formation";
  soustitre = "Comme Fatima, 40% des bacheliers utilisent Camerdiplome pour trouver leur école";
  photo = "./../../../../assets/images/fati_lon_mini.jpg";
  
  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title,
              private meta : Meta ) {this.titleService.setTitle("Le DUT au Cameroun | Camerdiplome ");
                                      this.meta.addTags([ 
                                        { name: 'description', content: 'Le Diplôme Universitaire de Technologie (DUT) se prépare dans un Institut Universitaire de Technologie (IUT)' }, 
                                        { name: 'keywords', content: 'DUT, BTS IUT, Diplôme Universitaire de Technologie, Institut Universitaire de Technologie, formation ' } 
                                      ]);
            }

  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('dut')

  }

}

