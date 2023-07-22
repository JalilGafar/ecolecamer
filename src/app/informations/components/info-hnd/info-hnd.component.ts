import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { InfoServices } from '../../information.services';

@Component({
  selector: 'app-info-hnd',
  templateUrl: './info-hnd.component.html',
  styleUrls: ['./info-hnd.component.scss', '../../informations-style.module.scss']
})
export class InfoHndComponent implements OnInit {

  titre = "Find your training";
  soustitre = "Like Stefi, 40% of high school graduates use Camerdiplome to find their school";
  photo = "./../../../../assets/images/pexels-godisable-jacob.jpg";

  school$!: Observable<interestelt[]>

  constructor( private infoservice :InfoServices,
              private titleService:Title) {this.titleService.setTitle("The Higher National Diploma (HND)  in Cameroon  | Camerdiplome");}


  ngOnInit(): void {

    this.school$ = this.infoservice.getFirstInterestSchool('bac_pro')

  }
}
