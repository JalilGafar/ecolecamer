import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { OrientationModule } from "../orientation/orientation.module";
import { FormationInfoModule } from '../formation-info/formation-info.module';
import { TopVideoSchoolModule } from '../top-video-school/top-video-school.module';
import { TopNewsModule } from '../top-news/top-news.module';
import { CatalogPanelComponent } from './components/catalog-panel/catalog-panel.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
    declarations: [
        LandingPageComponent,
        CatalogPanelComponent
    ],
    imports: [
        CommonModule,
        OrientationModule,
        FormationInfoModule,
        TopVideoSchoolModule,
        TopNewsModule,
        SharedModule
    ],
    exports: [
      LandingPageComponent
  ]
})
export class LandingPageModule { }
