import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimengModule } from './primeng.modules';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    FlexLayoutModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    PrimengModule
  ],
})
export class SharedModule { }
