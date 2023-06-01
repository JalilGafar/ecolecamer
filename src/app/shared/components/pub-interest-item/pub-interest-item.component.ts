import { Component, Input, OnInit } from '@angular/core';
import { interestelt } from 'src/app/core/model/interest-item-model';

@Component({
  selector: 'app-pub-interest-item',
  templateUrl: './pub-interest-item.component.html',
  styleUrls: ['./pub-interest-item.component.scss']
})
export class PubInterestItemComponent implements OnInit{

  @Input() school!: interestelt;

  ngOnInit(): void {
  }
}
