import { Component, OnInit } from '@angular/core';
import {interestelt} from 'src/app/core/model/interest-item-model'

@Component({
  selector: 'app-pub-interest',
  templateUrl: './pub-interest.component.html',
  styleUrls: ['./pub-interest.component.scss']
})
export class PubInterestComponent implements OnInit{

  school!: interestelt [];


  ngOnInit(): void {
    this.school = [
      
    ]
  }
}
