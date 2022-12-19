import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FormationInfoRoutingModule } from './formation-info-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HeaderHeroComponent } from './components/header-hero/header-hero.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderHeroComponent
  ],
  imports: [
    CommonModule,
    FormationInfoRoutingModule,
    SharedModule
  ],
  exports: [
    HomeComponent,
    HeaderHeroComponent
  ]
})
export class FormationInfoModule { }
