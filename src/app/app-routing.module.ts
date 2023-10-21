import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { OnepageComponent } from './etablissement/components/onepage/onepage.component';
import { AboutComponent } from './about/about.component';
import { ReferencerComponent } from './referencer/referencer.component';
import { DiplomesComponent } from './diplomes/diplomes.component';


const routes: Routes = [
  { path: 'orientation', loadChildren: () => import('./orientation/orientation.module').then(m => m.OrientationModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  { path: 'info', loadChildren: () => import('./informations/informations.module').then(m => m.InformationsModule) },
  { path: 'etablissement', component: OnepageComponent},
  { path: '', component: LandingPageComponent},
  { path: 'login', component:LoginComponent},
  { path: 'about', component:AboutComponent},
  { path: 'diplome', component: DiplomesComponent},
  { path: 'referencer', component:ReferencerComponent},
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
