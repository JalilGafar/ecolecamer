import { Component, OnInit } from '@angular/core';
import { TopNews } from 'src/app/core/model/top-news-model';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopNewsService } from 'src/app/services/top-news.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-top-news-slide',
  templateUrl: './top-news-slide.component.html',
  styleUrls: ['./top-news-slide.component.scss']
})
export class TopNewsSlideComponent {

  myTopNews$!: Observable<TopNews[]>;

  
  responsiveOptions;

  constructor( private TopNewsService : TopNewsService ){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.myTopNews$ = this.TopNewsService.getAllTopNews();
  }
}
