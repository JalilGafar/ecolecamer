import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './formation-info/components/home/home.component';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { CityComponent } from './orientation/components/city/city.component';
import { DegreeComponent } from './orientation/components/degree/degree.component';
import { FieldComponent } from './orientation/components/field/field.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'orientation', loadChildren: () => import('./orientation/orientation.module').then(m => m.OrientationModule) },
  { path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
