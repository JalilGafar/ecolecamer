import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNewsSlideComponent } from './components/top-news-slide/top-news-slide.component';



@NgModule({
  declarations: [
    TopNewsSlideComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopNewsSlideComponent
  ]
})
export class TopNewsModule { }
