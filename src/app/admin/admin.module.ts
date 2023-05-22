import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { SingleFormationComponent } from './components/single-formation/single-formation.component';
import { ModifFormationComponent } from './components/modif-formation/modif-formation.component';
import { NewFormationComponent } from './components/new-formation/new-formation.component';
import { AuthenService } from './services/auth.service';
import { SharedModule } from '../shared/shared.module';
import { AdminService } from './services/admin.service';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { UnivListComponent } from './components/univ-list/univ-list.component';
import { CampusListComponent } from './components/campus-list/campus-list.component';
import { EcoleListComponent } from './components/ecole-list/ecole-list.component';
import { SingleUnivComponent } from './components/single-univ/single-univ.component';
import { SingleEcoleComponent } from './components/single-ecole/single-ecole.component';
import { SingleCampusComponent } from './components/single-campus/single-campus.component';
import { ModifUnivComponent } from './components/modif-univ/modif-univ.component';
import { NewUnivComponent } from './components/new-univ/new-univ.component';
import { NewEcoleComponent } from './components/new-ecole/new-ecole.component';
import { NewCampusComponent } from './components/new-campus/new-campus.component';
import { ModifCampusComponent } from './components/modif-campus/modif-campus.component';
import { ModifEcoleComponent } from './components/modif-ecole/modif-ecole.component';


@NgModule({
  declarations: [
    LoginComponent,
    FormationListComponent,
    SingleFormationComponent,
    ModifFormationComponent,
    NewFormationComponent,
    AdminStartComponent,
    UnivListComponent,
    CampusListComponent,
    EcoleListComponent,
    SingleUnivComponent,
    SingleEcoleComponent,
    SingleCampusComponent,
    ModifUnivComponent,
    NewUnivComponent,
    NewEcoleComponent,
    NewCampusComponent,
    ModifCampusComponent,
    ModifEcoleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ],
  providers:[
    AuthenService,
    AdminService
  ]
})
export class AdminModule { }
