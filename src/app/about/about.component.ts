import { AfterViewInit, Component } from '@angular/core';
import { TopNewsService } from '../services/top-news.service';
import { BEHAVIOR } from '../core/model/Behavior';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit{

  constructor( private topNewsService: TopNewsService){}

  ngAfterViewInit(): void {
    this.topNewsService.scrollTo('header', BEHAVIOR.auto)
  }
}
