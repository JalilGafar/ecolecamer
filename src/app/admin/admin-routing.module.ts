import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { LoginComponent } from './components/login/login.component';
import { SingleFormationComponent } from './components/single-formation/single-formation.component';
import { SingleUnivComponent } from './components/single-univ/single-univ.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
 // { path: 'formations', component: FormationListComponent},
  { path: 'adminStart', component: AdminStartComponent},
  { path: 'universite/:id', component: SingleUnivComponent },
  { path: 'formation/:id', component: SingleFormationComponent },
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
