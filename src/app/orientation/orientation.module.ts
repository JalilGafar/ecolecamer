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
import { ClasseComponent } from './components/classe/classe.component';
import { EtudiantComponent } from './components/etudiant/etudiant.component';
import { DernierDiplomeComponent } from './components/dernier-diplome/dernier-diplome.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { ResultatsComponent } from './components/resultats/resultats.component';



@NgModule({
  declarations: [
    StartComponent,
    DegreeComponent,
    FieldComponent,
    CityComponent,
    StatutsComponent,
    ClasseComponent,
    EtudiantComponent,
    DernierDiplomeComponent,
    ContactComponent,
    ResultatsComponent
  ],
  imports: [
    CommonModule,
    OrientationRoutingModule,
    SharedModule,
    NgxMatIntlTelInputComponent
  ],
  exports :[
    StartComponent
  ],
  providers:[
    OrientationService
  ]
})
export class OrientationModule { }
