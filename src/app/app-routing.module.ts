import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { HomeComponent } from './home/home.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { CityComponent } from './orientation/components/city/city.component';
import { DegreeComponent } from './orientation/components/degree/degree.component';
import { FieldComponent } from './orientation/components/field/field.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'orientation', loadChildren: () => import('./orientation/orientation.module').then(m => m.OrientationModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: '', component: LandingPageComponent},
  { path: 'home', component:HomeComponent},
  { path: 'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent},
  { path: 'profil', component:ProfileComponent},
  { path: 'user', component:BoardUserComponent},
  { path: 'mod', component:BoardModeratorComponent},
 // { path: 'admin', component:BoardAdminComponent},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
