import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PrimengModule } from './primeng.modules';
import { MyFilterPipe } from './pipes/myfilter.pipe';
import { DomFilterPipe } from './pipes/domFilter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HeadmsgComponent } from './components/headmsg/headmsg.component';
import { PubFirstComponent } from './components/pub-first/pub-first.component';
import { PubInterestComponent } from './components/pub-interest/pub-interest.component';
import { InfoRedactionComponent } from './components/info-redaction/info-redaction.component';
import { InterestListComponent } from './components/interest-list/interest-list.component';
import { InterestActualiteComponent } from './components/interest-actualite/interest-actualite.component';
import { InterestAvisComponent } from './components/interest-avis/interest-avis.component';
import { InterestClassificationComponent } from './components/interest-classification/interest-classification.component';
import { PubInterestItemComponent } from './components/pub-interest-item/pub-interest-item.component';




@NgModule({
  declarations: [
    MyFilterPipe,
    DomFilterPipe,
    HeadmsgComponent,
    PubFirstComponent,
    PubInterestComponent,
    InfoRedactionComponent,
    InterestListComponent,
    InterestActualiteComponent,
    InterestAvisComponent,
    InterestClassificationComponent,
    PubInterestItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PrimengModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    PrimengModule,
    MyFilterPipe,
    DomFilterPipe,
    ReactiveFormsModule,
    FormsModule,
    HeadmsgComponent,
    PubFirstComponent,
    PubInterestComponent,
    PubInterestItemComponent,
    InfoRedactionComponent,
    InterestListComponent,
    InterestActualiteComponent,
    InterestAvisComponent,
    InterestClassificationComponent
  ],
})
export class SharedModule { }
