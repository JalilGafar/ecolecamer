import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnepageComponent } from './components/onepage/onepage.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    OnepageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class EtablissementModule { }
