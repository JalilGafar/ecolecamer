import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimengModule } from './primeng.modules';
import { MyFilterPipe } from './pipes/myfilter.pipe';
import { DomFilterPipe } from './pipes/domFilter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    MyFilterPipe,
    DomFilterPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    PrimengModule,
    MyFilterPipe,
    DomFilterPipe,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class SharedModule { }
