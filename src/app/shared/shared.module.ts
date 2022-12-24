import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CarouselModule} from 'primeng/carousel';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    CarouselModule
  ],
})
export class SharedModule { }
