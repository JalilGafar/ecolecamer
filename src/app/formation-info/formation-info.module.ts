import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormationInfoRoutingModule } from './formation-info-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormationInfoRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class FormationInfoModule { }
