import { Component, Input } from '@angular/core';
import { TopNews } from 'src/app/core/model/top-news-model';

@Component({
  selector: 'app-top-news-item',
  templateUrl: './top-news-item.component.html',
  styleUrls: ['./top-news-item.component.scss']
})
export class TopNewsItemComponent {
  @Input() topNews!: TopNews;
}
