import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNewsSlideComponent } from './components/top-news-slide/top-news-slide.component';
import { TopNewsItemComponent } from './components/top-news-item/top-news-item.component';
import { SingleTopNewsComponent } from './components/single-top-news/single-top-news.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TopNewsSlideComponent,
    TopNewsItemComponent,
    SingleTopNewsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    TopNewsSlideComponent
  ]
})
export class TopNewsModule { }
