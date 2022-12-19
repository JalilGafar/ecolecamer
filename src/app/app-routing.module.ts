import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './formation-info/components/home/home.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';

const routes: Routes = [
//  { path: '', loadChildren: () => import('./formation-info/formation-info.module').then(m => m.FormationInfoModule) },
  { path: '', component: LandingPageComponent},
 // { path: 'orientation/start', loadChildren: () => import('./orientation/orientation.module').then(m => m.OrientationModule) },
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
