import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InfoRoutingModule } from './informations-routing.module';
import { InfoDiplomeComponent } from './components/info-diplome/info-diplome.component';
import { InfoBacProComponent } from './components/info-bac-pro/info-bac-pro.component';
import { InfoCapComponent } from './components/info-cap/info-cap.component';
import { InfoBtsComponent } from './components/info-bts/info-bts.component';
import { InfoPrepaComponent } from './components/info-prepa/info-prepa.component';
import { InfoDutComponent } from './components/info-dut/info-dut.component';
import { InfoButComponent } from './components/info-but/info-but.component';
import { InfoBachelorComponent } from './components/info-bachelor/info-bachelor.component';
import { InfoLicenceComponent } from './components/info-licence/info-licence.component';
import { InfoLicenceProComponent } from './components/info-licence-pro/info-licence-pro.component';
import { InfoMasterComponent } from './components/info-master/info-master.component';
import { InfoEcoleComponent } from './components/info-ecole/info-ecole.component';
import { InfoFormationComponent } from './components/info-formation/info-formation.component';
import { InfoMetierComponent } from './components/info-metier/info-metier.component';
import { FormationInfoModule } from "../formation-info/formation-info.module";
import { OrientationModule } from "../orientation/orientation.module";



@NgModule({
    declarations: [
        InfoDiplomeComponent,
        InfoBacProComponent,
        InfoCapComponent,
        InfoBtsComponent,
        InfoPrepaComponent,
        InfoDutComponent,
        InfoButComponent,
        InfoBachelorComponent,
        InfoLicenceComponent,
        InfoLicenceProComponent,
        InfoMasterComponent,
        InfoEcoleComponent,
        InfoFormationComponent,
        InfoMetierComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        InfoRoutingModule,
        FormationInfoModule,
        OrientationModule
    ]
})
export class InformationsModule { }
