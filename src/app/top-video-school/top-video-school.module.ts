import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopVideoSlideComponent } from './components/top-video-slide/top-video-slide.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TopVideoSlideComponent
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    FlexLayoutModule,
    SharedModule
  ],
  exports: [
    TopVideoSlideComponent
  ]
})
export class TopVideoSchoolModule { }
