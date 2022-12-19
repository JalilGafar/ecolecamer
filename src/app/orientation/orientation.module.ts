import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import { DegreeComponent } from './components/degree/degree.component';
import { FieldComponent } from './components/field/field.component';
import { CityComponent } from './components/city/city.component';
import { OrientationRoutingModule } from './orientation-routing.module';



@NgModule({
  declarations: [
    StartComponent,
    DegreeComponent,
    FieldComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    OrientationRoutingModule
  ]
})
export class OrientationModule { }
