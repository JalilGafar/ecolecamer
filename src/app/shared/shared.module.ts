import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimengModule } from './primeng.modules';
import { MyFilterPipe } from './pipes/myfilter.pipe';
import { DomFilterPipe } from './pipes/domFilter.pipe';




@NgModule({
  declarations: [
    MyFilterPipe,
    DomFilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    PrimengModule,
    MyFilterPipe,
    DomFilterPipe
  ],
})
export class SharedModule { }
