import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationListComponent } from './components/formation-list/formation-list.component';
import { LoginComponent } from './components/login/login.component';
import { SingleFormationComponent } from './components/single-formation/single-formation.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'formations', component: FormationListComponent},
  { path: 'formation/:id', component: SingleFormationComponent },
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
