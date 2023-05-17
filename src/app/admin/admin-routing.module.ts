import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { LoginComponent } from './components/login/login.component';
import { ModifCampusComponent } from './components/modif-campus/modif-campus.component';
import { ModifEcoleComponent } from './components/modif-ecole/modif-ecole.component';
import { ModifFormationComponent } from './components/modif-formation/modif-formation.component';
import { ModifUnivComponent } from './components/modif-univ/modif-univ.component';
import { NewCampusComponent } from './components/new-campus/new-campus.component';
import { NewEcoleComponent } from './components/new-ecole/new-ecole.component';
import { NewFormationComponent } from './components/new-formation/new-formation.component';
import { NewUnivComponent } from './components/new-univ/new-univ.component';
import { SingleCampusComponent } from './components/single-campus/single-campus.component';
import { SingleEcoleComponent } from './components/single-ecole/single-ecole.component';
import { SingleFormationComponent } from './components/single-formation/single-formation.component';
import { SingleUnivComponent } from './components/single-univ/single-univ.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
 // { path: 'formations', component: FormationListComponent},
  { path: 'adminStart', component: AdminStartComponent},
  { path: 'new-campus', component: NewCampusComponent},
  { path: 'new-ecole', component: NewEcoleComponent},
  { path: 'new-formation', component: NewFormationComponent},
  { path: 'new-universite', component: NewUnivComponent},
  { path: 'campus/:id', component: SingleCampusComponent },
  { path: 'ecole/:id', component: SingleEcoleComponent },
  { path: 'universite/:id', component: SingleUnivComponent },
  { path: 'modif-univ/:id', component: ModifUnivComponent },
  { path: 'modif-ecole/:id', component: ModifEcoleComponent },
  { path: 'modif-campus/:id', component: ModifCampusComponent },
  { path: 'modif-formation/:id', component: ModifFormationComponent },
  { path: 'formation/:id', component: SingleFormationComponent },
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
