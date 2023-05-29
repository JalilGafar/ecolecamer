import { LOCALE_ID, NgModule } from '@angular/core';
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
import { LandingPageModule } from './landing-page/landing-page.module';
import { TopVideoSchoolModule } from './top-video-school/top-video-school.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminModule } from './admin/admin.module';
import { httpInterceptorProviders } from './interceptors/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { InformationsModule } from './informations/informations.module';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        ProfileComponent,
        BoardUserComponent,
        BoardModeratorComponent,
        BoardAdminComponent
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        httpInterceptorProviders
    ],
    bootstrap: [
      AppComponent,
      CoreModule,
      TopVideoSchoolModule
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
        OrientationModule,
        AdminModule,
        InformationsModule,
        LandingPageModule,
        HttpClientModule
    ]
})
export class AppModule { }
