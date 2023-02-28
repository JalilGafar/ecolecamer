import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './components/start/start.component';
import { DegreeComponent } from './components/degree/degree.component';
import { FieldComponent } from './components/field/field.component';
import { CityComponent } from './components/city/city.component';
import { OrientationRoutingModule } from './orientation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OrientationService } from './services/orientation.service';
import { StatutsComponent } from './components/statuts/statuts.component';



@NgModule({
  declarations: [
    StartComponent,
    DegreeComponent,
    FieldComponent,
    CityComponent,
    StatutsComponent
  ],
  imports: [
    CommonModule,
    OrientationRoutingModule,
    SharedModule
  ],
  exports :[
    StartComponent
  ],
  providers:[
    OrientationService
  ]
})
export class OrientationModule { }
