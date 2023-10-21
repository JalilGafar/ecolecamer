import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormationInfoModule } from './formation-info/formation-info.module';
import { LandingPageModule } from './landing-page/landing-page.module';
import { TopVideoSchoolModule } from './top-video-school/top-video-school.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { NgxMatIntlTelInputComponent } from 'ngx-mat-intl-tel-input';
import { AboutComponent } from './about/about.component';
import { ReferencerComponent } from './referencer/referencer.component';
import { DiplomesComponent } from './diplomes/diplomes.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
//import { LoadingInterceptor } from './interceptors/loading.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        RegisterComponent,
        ProfileComponent,
        BoardUserComponent,
        BoardModeratorComponent,
        BoardAdminComponent,
        AboutComponent,
        ReferencerComponent,
        DiplomesComponent,
        SpinnerComponent,
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'fr-FR' },
        {provide: LocationStrategy, useClass: HashLocationStrategy},
       // {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true},
        httpInterceptorProviders
    ],
    bootstrap: [
      AppComponent,
      CoreModule,
      TopVideoSchoolModule
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        AppRoutingModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        //FlexLayoutModule,
        NgbModule,
        FormationInfoModule,
       // OrientationModule,
       // AdminModule,
       // InformationsModule,
        LandingPageModule,
        HttpClientModule,
        NgxMatIntlTelInputComponent
    ]
})
export class AppModule { }
