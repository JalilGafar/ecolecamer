import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CarouselModule} from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview'


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule,
    DataViewModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    CarouselModule,
    DataViewModule
  ],
})
export class SharedModule { }
