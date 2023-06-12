import { Component, OnInit } from '@angular/core';
import { interestelt } from 'src/app/core/model/interest-item-model';
import { OrientationService } from '../../services/orientation.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrls: ['./resultats.component.scss']
})
export class ResultatsComponent implements OnInit{

  school$!: Observable <interestelt[]>;

  constructor (private orientationService : OrientationService){}

  ngOnInit(): void {
    this.school$ = this.orientationService.getSerchResult()
  }

}
