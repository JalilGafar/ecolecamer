import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    SharedModule
  ]
})
export class CoreModule { }
