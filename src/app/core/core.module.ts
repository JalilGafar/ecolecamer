import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { SidenavListComponent } from './components/sidenav-list/sidenav-list.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidenavListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule
  ], 
  exports: [
    HeaderComponent,
    FooterComponent,
    SharedModule,
    SidenavListComponent
  ]
})
export class CoreModule { }
