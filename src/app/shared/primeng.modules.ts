import { NgModule } from '@angular/core';
import {CarouselModule} from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import {ButtonModule} from 'primeng/button';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {EditorModule} from 'primeng/editor';
import {DropdownModule} from 'primeng/dropdown';
import {RadioButtonModule} from 'primeng/radiobutton';

@NgModule({
    exports: [
      CarouselModule,
      DataViewModule,
      ButtonModule,
      AccordionModule,
      TableModule,
      EditorModule,
      DropdownModule,
      RadioButtonModule
    ]
  })

export class PrimengModule {}