import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import {CarouselModule} from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule,
    DataViewModule,
    ButtonModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    CarouselModule,
    DataViewModule,
    ButtonModule
  ],
})
export class SharedModule { }
