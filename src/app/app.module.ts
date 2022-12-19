import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormationInfoModule } from './formation-info/formation-info.module';
import { OrientationModule } from './orientation/orientation.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [
      AppComponent,
      CoreModule
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        //FlexLayoutModule,
        NgbModule,
        FormationInfoModule,
        OrientationModule
    ]
})
export class AppModule { }
